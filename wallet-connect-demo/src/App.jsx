import { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserProvider } from 'ethers'
import {
  getAddChainParams,
  isSupportedChain,
  NETWORK_BUTTONS,
  toHexChainId,
} from './chains'
import {
  getStoredLang,
  LANG_OPTIONS,
  makeTranslator,
  storeLang,
} from './i18n'
import './App.css'

/** Shorten 0x address for display: 0x1234…abcd */
function shortenAddress(addr) {
  if (!addr || addr.length < 10) return addr || ''
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`
}

export default function App() {
  const [lang, setLang] = useState(getStoredLang)
  const t = useMemo(() => makeTranslator(lang), [lang])

  const [account, setAccount] = useState(null)
  /** bigint chain id from ethers after connection */
  const [chainId, setChainId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const hasMetaMask =
    typeof window !== 'undefined' &&
    Boolean(window.ethereum?.isMetaMask)

  const wrongNetwork =
    Boolean(account) && chainId != null && !isSupportedChain(chainId)

  /** Human-readable network label using i18n keys from chains.js mapping */
  const networkLabel = useMemo(() => {
    if (chainId == null) return '—'
    const map = {
      1n: 'networkEthereum',
      137n: 'networkPolygon',
      56n: 'networkBnb',
      42161n: 'networkArbitrum',
    }
    const key = map[chainId]
    return key ? t(key) : t('networkUnknown')
  }, [chainId, t])

  const changeLang = (next) => {
    storeLang(next)
    setLang(next)
  }

  /**
   * Refresh account + chain from the wallet without prompting the user.
   * Uses eth_accounts (only already-authorized accounts) and getNetwork().
   */
  const syncFromWallet = useCallback(async () => {
    const eth = window.ethereum
    if (!eth) return
    try {
      const provider = new BrowserProvider(eth)
      const accounts = await provider.send('eth_accounts', [])
      setAccount(accounts[0] ?? null)
      const network = await provider.getNetwork()
      setChainId(network.chainId)
    } catch {
      setAccount(null)
      setChainId(null)
    }
  }, [])

  /**
   * Full connect flow:
   * 1. Build an ethers BrowserProvider around window.ethereum (MetaMask injects this).
   * 2. eth_requestAccounts opens MetaMask and asks the user to approve access.
   * 3. Read address from signer and chain id from the provider network.
   */
  const connect = async () => {
    setError(null)
    if (!window.ethereum?.isMetaMask) {
      setError(t('metamaskNotInstalled'))
      return
    }
    setLoading(true)
    try {
      const provider = new BrowserProvider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
      const network = await provider.getNetwork()
      setAccount(address)
      setChainId(network.chainId)
    } catch (err) {
      const code = err?.code ?? err?.info?.error?.code
      if (code === 4001 || code === 'ACTION_REJECTED') {
        setError(t('userRejected'))
      } else {
        setError(err?.shortMessage || err?.message || t('errorGeneric'))
      }
    } finally {
      setLoading(false)
    }
  }

  /**
   * "Disconnect" only clears our UI state. MetaMask may still show the site as connected
   * until the user revokes access in the extension — common limitation for beginners.
   */
  const disconnect = () => {
    setAccount(null)
    setChainId(null)
    setError(null)
  }

  /**
   * Ask MetaMask to switch chain. If the chain is unknown to the wallet, error 4902
   * triggers wallet_addEthereumChain with metadata from chains.js.
   */
  const switchNetwork = async (targetChainId) => {
    const eth = window.ethereum
    if (!eth?.isMetaMask) return
    setError(null)
    setLoading(true)
    const hexId = toHexChainId(targetChainId)
    try {
      await eth.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexId }],
      })
      const provider = new BrowserProvider(eth)
      const network = await provider.getNetwork()
      setChainId(network.chainId)
    } catch (err) {
      const code = err?.code
      if (code === 4902) {
        const params = getAddChainParams(targetChainId)
        if (!params) {
          setError(t('errorGeneric'))
          setLoading(false)
          return
        }
        try {
          await eth.request({
            method: 'wallet_addEthereumChain',
            params: [params],
          })
          await eth.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: hexId }],
          })
          const provider = new BrowserProvider(eth)
          const network = await provider.getNetwork()
          setChainId(network.chainId)
        } catch (e2) {
          if (e2?.code === 4001) setError(t('userRejected'))
          else setError(e2?.message || t('errorGeneric'))
        }
      } else if (code === 4001) {
        setError(t('userRejected'))
      } else {
        setError(err?.message || t('errorGeneric'))
      }
    } finally {
      setLoading(false)
    }
  }

  /** On load: if user already approved this site, repopulate address + chain */
  useEffect(() => {
    syncFromWallet()
  }, [syncFromWallet])

  /**
   * Subscribe to MetaMask events so address / chain update without full page reload.
   * chainChanged passes chainId as hex string — convert to bigint for our state.
   */
  useEffect(() => {
    const eth = window.ethereum
    if (!eth) return

    const onAccounts = (accounts) => {
      setAccount(accounts[0] ?? null)
      if (!accounts[0]) setChainId(null)
    }
    const onChainChanged = (hexChainId) => {
      setChainId(BigInt(hexChainId))
      setError(null)
    }

    eth.on('accountsChanged', onAccounts)
    eth.on('chainChanged', onChainChanged)
    return () => {
      eth.removeListener('accountsChanged', onAccounts)
      eth.removeListener('chainChanged', onChainChanged)
    }
  }, [])

  return (
    <div className="app">
      <header className="top-bar">
        <span className="logo-dot" aria-hidden />
        <span className="brand">wallet-connect-demo</span>
        <div className="lang-switch" role="group" aria-label={t('langLabel')}>
          {LANG_OPTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`lang-btn ${lang === id ? 'active' : ''}`}
              onClick={() => changeLang(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <main className="main">
        <section className="hero-card card">
          <p className="eyebrow">{t('techBadge')}</p>
          <h1>{t('title')}</h1>
          <p className="tagline">{t('tagline')}</p>

          {!hasMetaMask && (
            <div className="banner warn" role="alert">
              <p>{t('metamaskNotInstalled')}</p>
              <a
                className="link-btn"
                href="https://metamask.io/download/"
                target="_blank"
                rel="noreferrer"
              >
                {t('installMetaMask')}
              </a>
            </div>
          )}

          {error && (
            <div className="banner error" role="alert">
              {error}
            </div>
          )}

          <div className="actions">
            {!account ? (
              <button
                type="button"
                className="btn primary"
                onClick={connect}
                disabled={!hasMetaMask || loading}
              >
                {loading ? t('connecting') : t('connectWallet')}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="btn primary"
                  onClick={disconnect}
                  disabled={loading}
                >
                  {loading ? t('switching') : t('disconnect')}
                </button>
              </>
            )}
          </div>

          {loading && !account && (
            <p className="loading-msg" aria-live="polite">
              {t('connecting')}
            </p>
          )}
          {loading && account && (
            <p className="loading-msg" aria-live="polite">
              {t('switching')}
            </p>
          )}
        </section>

        {account && (
          <section className="grid card info-grid">
            <div className="field">
              <span className="label">{t('connectedAddress')}</span>
              <code className="mono wrap">{account}</code>
            </div>
            <div className="field">
              <span className="label">{t('shortenedAddress')}</span>
              <code className="mono">{shortenAddress(account)}</code>
            </div>
            <div className="field">
              <span className="label">{t('chainId')}</span>
              <code className="mono">
                {chainId != null ? chainId.toString() : '—'}
              </code>
            </div>
            <div className="field">
              <span className="label">{t('networkName')}</span>
              <span className="network-pill">{networkLabel}</span>
            </div>
          </section>
        )}

        {wrongNetwork && (
          <div className="banner warn" role="status">
            <strong>{t('wrongNetwork')}</strong>
            <p>{t('wrongNetworkHint')}</p>
          </div>
        )}

        {account && (
          <section className="card network-card">
            <h2 className="section-title">{t('selectNetwork')}</h2>
            <div className="network-buttons">
              {NETWORK_BUTTONS.map(({ chainId: id, nameKey }) => (
                <button
                  key={id.toString()}
                  type="button"
                  className={`net-btn ${chainId === id ? 'current' : ''}`}
                  onClick={() => switchNetwork(id)}
                  disabled={loading}
                >
                  {t(nameKey)}
                </button>
              ))}
            </div>
            <p className="hint">{t('disconnectHint')}</p>
          </section>
        )}
      </main>

      <footer className="footer">
        <span>{t('footerNote')}</span>
      </footer>
    </div>
  )
}
