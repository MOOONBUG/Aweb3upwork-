/**
 * UI copy for EN / 中文 / 한국어.
 * Keep keys in sync across all languages.
 */
export const LANG_OPTIONS = [
  { id: 'en', label: 'EN' },
  { id: 'zh', label: '中文' },
  { id: 'kr', label: '한국어' },
]

const STORAGE_KEY = 'wallet-connect-demo-lang'

export const translations = {
  en: {
    title: 'Web3 Wallet Demo',
    tagline: 'Connect MetaMask with ethers.js — dark mode, responsive, beginner-friendly.',
    techBadge: 'ethers.js · MetaMask',
    footerNote: 'Vite + React · plain CSS',
    langLabel: 'Language',
    connectWallet: 'Connect Wallet',
    disconnect: 'Disconnect',
    connecting: 'Connecting…',
    switching: 'Switching…',
    metamaskNotInstalled:
      'MetaMask is not installed. Install the browser extension to connect.',
    installMetaMask: 'Get MetaMask',
    connectedAddress: 'Connected address',
    shortenedAddress: 'Short address',
    chainId: 'Chain ID',
    networkName: 'Network',
    selectNetwork: 'Switch network',
    wrongNetwork: 'Unsupported network',
    wrongNetworkHint:
      'This app works best on Ethereum, Polygon, BNB Chain, or Arbitrum. Pick a network below or switch in MetaMask.',
    errorGeneric: 'Something went wrong. Please try again.',
    userRejected: 'Request was rejected in the wallet.',
    disconnectHint:
      'Tip: clearing here only resets this page. To fully disconnect, use MetaMask.',
    networkEthereum: 'Ethereum',
    networkPolygon: 'Polygon',
    networkBnb: 'BNB Chain',
    networkArbitrum: 'Arbitrum One',
    networkUnknown: 'Unknown network',
  },
  zh: {
    title: 'Web3 钱包演示',
    tagline: '使用 ethers.js 连接 MetaMask — 深色界面、响应式、代码易懂。',
    techBadge: 'ethers.js · MetaMask',
    footerNote: 'Vite + React · 纯 CSS',
    langLabel: '语言',
    connectWallet: '连接钱包',
    disconnect: '断开连接',
    connecting: '连接中…',
    switching: '切换中…',
    metamaskNotInstalled: '未检测到 MetaMask。请安装浏览器扩展后再连接。',
    installMetaMask: '获取 MetaMask',
    connectedAddress: '已连接地址',
    shortenedAddress: '缩写地址',
    chainId: '链 ID',
    networkName: '网络',
    selectNetwork: '切换网络',
    wrongNetwork: '当前网络不受支持',
    wrongNetworkHint:
      '本演示建议在以太坊、Polygon、BNB 链或 Arbitrum 上使用。请在下方选择网络，或在 MetaMask 中切换。',
    errorGeneric: '出错了，请重试。',
    userRejected: '已在钱包中拒绝该请求。',
    disconnectHint: '提示：此处仅为页面状态重置。若要完全断开，请在 MetaMask 中操作。',
    networkEthereum: '以太坊',
    networkPolygon: 'Polygon',
    networkBnb: 'BNB 链',
    networkArbitrum: 'Arbitrum One',
    networkUnknown: '未知网络',
  },
  kr: {
    title: 'Web3 지갑 데모',
    tagline: 'ethers.js로 MetaMask 연결 — 다크 UI, 반응형, 초보자용 주석.',
    techBadge: 'ethers.js · MetaMask',
    footerNote: 'Vite + React · 순수 CSS',
    langLabel: '언어',
    connectWallet: '지갑 연결',
    disconnect: '연결 해제',
    connecting: '연결 중…',
    switching: '전환 중…',
    metamaskNotInstalled:
      'MetaMask가 설치되어 있지 않습니다. 브라우저 확장 프로그램을 설치한 뒤 연결하세요.',
    installMetaMask: 'MetaMask 받기',
    connectedAddress: '연결된 주소',
    shortenedAddress: '축약 주소',
    chainId: '체인 ID',
    networkName: '네트워크',
    selectNetwork: '네트워크 전환',
    wrongNetwork: '지원하지 않는 네트워크',
    wrongNetworkHint:
      '이 데모는 이더리움, 폴리곤, BNB 체인, 아비트럼에서 사용하는 것이 좋습니다. 아래에서 선택하거나 MetaMask에서 전환하세요.',
    errorGeneric: '문제가 발생했습니다. 다시 시도해 주세요.',
    userRejected: '지갑에서 요청이 거부되었습니다.',
    disconnectHint:
      '안내: 여기서는 이 페이지 상태만 초기화합니다. 완전히 끊으려면 MetaMask에서 해제하세요.',
    networkEthereum: '이더리움',
    networkPolygon: '폴리곤',
    networkBnb: 'BNB 체인',
    networkArbitrum: '아비트럼 원',
    networkUnknown: '알 수 없는 네트워크',
  },
}

export function getStoredLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'zh' || v === 'kr') return v
  } catch {
    /* ignore */
  }
  return 'en'
}

export function storeLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* ignore */
  }
}

/** Returns a translator function: t('connectWallet') */
export function makeTranslator(lang) {
  const table = translations[lang] || translations.en
  return (key) => table[key] ?? translations.en[key] ?? key
}
