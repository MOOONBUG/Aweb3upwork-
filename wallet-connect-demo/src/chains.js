/**
 * Supported networks for this demo: Ethereum, Polygon, BNB Chain, Arbitrum.
 * Used to detect "wrong" networks and to build wallet_addEthereumChain params.
 */

/** bigint chain IDs we treat as "correct" for this app */
export const SUPPORTED_CHAIN_IDS = [1n, 137n, 56n, 42161n]

export function isSupportedChain(chainId) {
  if (chainId == null) return false
  const id = typeof chainId === 'bigint' ? chainId : BigInt(chainId)
  return SUPPORTED_CHAIN_IDS.includes(id)
}

/**
 * MetaMask expects chainId as a 0x-prefixed hex string (e.g. "0x1").
 */
export function toHexChainId(chainId) {
  const id = typeof chainId === 'bigint' ? chainId : BigInt(chainId)
  return '0x' + id.toString(16)
}

/**
 * Parameters for wallet_addEthereumChain — shown when the chain is missing in MetaMask.
 * rpcUrls / explorers are public endpoints; use your own RPC in production.
 */
export const ADD_CHAIN_PARAMS = {
  1: {
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://ethereum.publicnode.com'],
    blockExplorerUrls: ['https://etherscan.io'],
  },
  137: {
    chainId: '0x89',
    chainName: 'Polygon Mainnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  56: {
    chainId: '0x38',
    chainName: 'BNB Smart Chain Mainnet',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  42161: {
    chainId: '0xa4b1',
    chainName: 'Arbitrum One',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io'],
  },
}

export function getAddChainParams(chainId) {
  const n = Number(chainId)
  return ADD_CHAIN_PARAMS[n] ?? null
}

/** UI list order */
export const NETWORK_BUTTONS = [
  { chainId: 1n, nameKey: 'networkEthereum' },
  { chainId: 137n, nameKey: 'networkPolygon' },
  { chainId: 56n, nameKey: 'networkBnb' },
  { chainId: 42161n, nameKey: 'networkArbitrum' },
]
