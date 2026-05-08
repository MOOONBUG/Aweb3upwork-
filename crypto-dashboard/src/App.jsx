import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

/**
 * Primary category per CoinGecko id (used for tabs, badges, and filtering).
 * ~80 assets across major sectors — ids must match CoinGecko exactly.
 */
const COIN_REGISTRY = [
  // Layer 1
  { id: 'bitcoin', category: 'layer1' },
  { id: 'ethereum', category: 'layer1' },
  { id: 'solana', category: 'layer1' },
  { id: 'cardano', category: 'layer1' },
  { id: 'ripple', category: 'layer1' },
  { id: 'avalanche-2', category: 'layer1' },
  { id: 'polkadot', category: 'layer1' },
  { id: 'tron', category: 'layer1' },
  { id: 'toncoin', category: 'layer1' },
  { id: 'internet-computer', category: 'layer1' },
  { id: 'near', category: 'layer1' },
  { id: 'aptos', category: 'layer1' },
  { id: 'sui', category: 'layer1' },
  { id: 'stellar', category: 'layer1' },
  { id: 'cosmos', category: 'layer1' },
  { id: 'litecoin', category: 'layer1' },
  { id: 'bitcoin-cash', category: 'layer1' },
  { id: 'ethereum-classic', category: 'layer1' },
  { id: 'kaspa', category: 'layer1' },
  { id: 'algorand', category: 'layer1' },
  { id: 'vechain', category: 'layer1' },
  { id: 'hedera-hashgraph', category: 'layer1' },
  { id: 'sei-network', category: 'layer1' },
  // Layer 2
  { id: 'arbitrum', category: 'layer2' },
  { id: 'optimism', category: 'layer2' },
  { id: 'polygon-ecosystem-token', category: 'layer2' },
  { id: 'immutable-x', category: 'layer2' },
  { id: 'mantle', category: 'layer2' },
  { id: 'starknet', category: 'layer2' },
  // DeFi
  { id: 'uniswap', category: 'defi' },
  { id: 'aave', category: 'defi' },
  { id: 'maker', category: 'defi' },
  { id: 'curve-dao-token', category: 'defi' },
  { id: 'lido-dao', category: 'defi' },
  { id: 'the-graph', category: 'defi' },
  { id: 'injective-protocol', category: 'defi' },
  { id: 'pancakeswap-token', category: 'defi' },
  { id: 'compound-governance-token', category: 'defi' },
  { id: 'synthetix-network-token', category: 'defi' },
  { id: '1inch', category: 'defi' },
  { id: 'pendle', category: 'defi' },
  { id: 'ethena', category: 'defi' },
  { id: 'jupiter-exchange-solana', category: 'defi' },
  // Meme
  { id: 'dogecoin', category: 'meme' },
  { id: 'pepe', category: 'meme' },
  { id: 'shiba-inu', category: 'meme' },
  { id: 'dogwifcoin', category: 'meme' },
  { id: 'floki', category: 'meme' },
  { id: 'bonk', category: 'meme' },
  // AI (fetch-ai is ASI Alliance on CoinGecko)
  { id: 'bittensor', category: 'ai' },
  { id: 'render-token', category: 'ai' },
  { id: 'fetch-ai', category: 'ai' },
  { id: 'akash-network', category: 'ai' },
  { id: 'ocean-protocol', category: 'ai' },
  { id: 'singularitynet', category: 'ai' },
  // Gaming / Metaverse
  { id: 'gala', category: 'gaming' },
  { id: 'the-sandbox', category: 'gaming' },
  { id: 'decentraland', category: 'gaming' },
  { id: 'axie-infinity', category: 'gaming' },
  { id: 'beam-2', category: 'gaming' },
  { id: 'ronin', category: 'gaming' },
  // Infrastructure
  { id: 'celestia', category: 'infrastructure' },
  { id: 'theta-token', category: 'infrastructure' },
  { id: 'quant-network', category: 'infrastructure' },
  // Oracle
  { id: 'chainlink', category: 'oracle' },
  // Exchange / CEX
  { id: 'binancecoin', category: 'exchange' },
  { id: 'okb', category: 'exchange' },
  { id: 'leo-token', category: 'exchange' },
  { id: 'crypto-com-chain', category: 'exchange' },
  { id: 'gatechain-token', category: 'exchange' },
  { id: 'kucoin-shares', category: 'exchange' },
  // Stablecoins
  { id: 'tether', category: 'stablecoins' },
  { id: 'usd-coin', category: 'stablecoins' },
  { id: 'dai', category: 'stablecoins' },
  { id: 'first-digital-usd', category: 'stablecoins' },
  { id: 'paypal-usd', category: 'stablecoins' },
  // RWA
  { id: 'ondo-finance', category: 'rwa' },
  { id: 'centrifuge-2', category: 'rwa' },
  // Privacy
  { id: 'monero', category: 'privacy' },
  { id: 'zcash', category: 'privacy' },
  { id: 'dash', category: 'privacy' },
  // Storage
  { id: 'arweave', category: 'storage' },
  { id: 'filecoin', category: 'storage' },
  { id: 'helium', category: 'storage' },
]

/** Stable ordering for cards after each fetch (same order as COIN_REGISTRY). */
const REGISTRY_ORDER = Object.fromEntries(
  COIN_REGISTRY.map((entry, index) => [entry.id, index]),
)

/** Fast lookup: CoinGecko id → category key (for badges + category filter). */
const COIN_CATEGORY = Object.fromEntries(
  COIN_REGISTRY.map((entry) => [entry.id, entry.category]),
)

/** Unique ids for the single /coins/markets request (deduped for safety). */
const COINGECKO_IDS = [...new Set(COIN_REGISTRY.map((c) => c.id))]

const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COINGECKO_IDS.join(',')}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`

/** Category tab keys (first is “All”). */
const CATEGORY_KEYS = [
  'all',
  'layer1',
  'layer2',
  'defi',
  'meme',
  'ai',
  'gaming',
  'infrastructure',
  'oracle',
  'exchange',
  'stablecoins',
  'rwa',
  'privacy',
  'storage',
]

/** App-supported languages (ids used as keys in TRANSLATIONS). */
const LANGUAGES = [
  { id: 'en', switcherLabel: 'EN' },
  { id: 'zh', switcherLabel: '中文' },
  { id: 'kr', switcherLabel: 'KR' },
]

/** BCP 47 locale strings for time formatting next to the “updated” label. */
const TIME_LOCALES = { en: 'en-US', zh: 'zh-CN', kr: 'ko-KR' }

/** How many “top mover” rows to show (best 24h performance in the current filter). */
const TOP_MOVERS_COUNT = 5

/** Market overview shows the top N assets by market cap within the current filter (CSS bars only). */
const OVERVIEW_TOP_N = 15

/**
 * All UI copy in one place. Switching language = picking TRANSLATIONS[lang].
 * Token names/symbols from the API are not listed here (they stay as returned).
 */
const TRANSLATIONS = {
  en: {
    documentTitle: 'Crypto Dashboard',
    title: 'Crypto Dashboard',
    subtitle: 'Live market data via CoinGecko',
    searchPlaceholder: 'Search by name or symbol…',
    refresh: 'Refresh',
    refreshing: 'Refreshing…',
    updatedPrefix: 'Updated',
    marketCapLabel: 'Market cap',
    label24h: '24h',
    changeUnavailable: '24h —',
    loading: 'Loading market data…',
    errorTitle: 'Could not load prices',
    tryAgain: 'Try again',
    errorHttp: 'Request failed ({{status}}). Try again in a moment.',
    errorUnexpected: 'Unexpected response from the API.',
    errorNetwork: 'Network error. Check your connection and try again.',
    emptyNoMatch:
      'No coins match “{{query}}” in this view. Try another search or category.',
    footerBefore: 'Data from ',
    footerAfter: '. For learning only — not financial advice.',
    langSwitcherAria: 'Language',
    categoryNavAria: 'Categories',
    summaryTitle: 'Portfolio snapshot',
    summaryLiveHint: 'Totals below follow your category tab + search (local filters).',
    summaryTotalMcap: 'Total market cap',
    summaryAvgChange24h: 'Avg. 24h change',
    summaryAssets: 'Assets in view',
    summaryLastUpdated: 'Last updated',
    topMoversTitle: 'Top movers',
    topMoversSubtitle: 'Strongest 24h performers in your current filter',
    topMoversEmpty: 'No 24h change data in this view.',
    marketOverviewTitle: 'Market overview',
    marketOverviewCaption:
      'Top {{n}} by market cap in the current filter (bars scaled to the largest row).',
    marketOverviewEmpty: 'No market cap data in this view.',
    rankShort: 'Rank',
    rowPrice: 'Price',
    rowChange24h: '24h change',
    volumeLabel24h: '24h volume',
    allAssetsTitle: 'Assets',
    tabAll: 'All',
    tabLayer1: 'Layer 1',
    tabLayer2: 'Layer 2',
    tabDefi: 'DeFi',
    tabMeme: 'Meme',
    tabAi: 'AI',
    tabGaming: 'Gaming',
    tabInfrastructure: 'Infrastructure',
    tabOracle: 'Oracle',
    tabExchange: 'Exchange',
    tabStablecoins: 'Stablecoins',
    tabRwa: 'RWA',
    tabPrivacy: 'Privacy',
    tabStorage: 'Storage',
  },
  zh: {
    documentTitle: '加密货币行情',
    title: '加密货币行情',
    subtitle: '通过 CoinGecko 提供的实时市场数据',
    searchPlaceholder: '按名称或符号搜索…',
    refresh: '刷新',
    refreshing: '刷新中…',
    updatedPrefix: '更新于',
    marketCapLabel: '市值',
    label24h: '24 小时',
    changeUnavailable: '24 小时 —',
    loading: '正在加载行情…',
    errorTitle: '无法加载价格',
    tryAgain: '重试',
    errorHttp: '请求失败（{{status}}）。请稍后重试。',
    errorUnexpected: 'API 返回了意外数据。',
    errorNetwork: '网络异常，请检查连接后重试。',
    emptyNoMatch:
      '当前视图中没有与「{{query}}」匹配的币种。可尝试更换搜索词或分类。',
    footerBefore: '数据来自 ',
    footerAfter: '。仅供学习，不构成投资建议。',
    langSwitcherAria: '语言',
    categoryNavAria: '分类',
    summaryTitle: '组合概览',
    summaryLiveHint: '下方指标会随分类标签与搜索筛选更新（本地过滤，不重复请求）。',
    summaryTotalMcap: '总市值',
    summaryAvgChange24h: '平均 24h 涨跌',
    summaryAssets: '当前视图资产数',
    summaryLastUpdated: '最近更新',
    topMoversTitle: '涨幅领先',
    topMoversSubtitle: '当前筛选条件下 24 小时表现最强的代币',
    topMoversEmpty: '当前视图中暂无 24 小时涨跌数据。',
    marketOverviewTitle: '市场概览',
    marketOverviewCaption:
      '当前筛选下市值前 {{n}} 名（条形相对本组最大值缩放）。',
    marketOverviewEmpty: '当前视图中暂无市值数据。',
    rankShort: '排名',
    rowPrice: '价格',
    rowChange24h: '24h 涨跌',
    volumeLabel24h: '24h 成交量',
    allAssetsTitle: '资产列表',
    tabAll: '全部',
    tabLayer1: '第一层',
    tabLayer2: '第二层',
    tabDefi: 'DeFi',
    tabMeme: 'Meme',
    tabAi: 'AI',
    tabGaming: '游戏',
    tabInfrastructure: '基础设施',
    tabOracle: '预言机',
    tabExchange: '交易所',
    tabStablecoins: '稳定币',
    tabRwa: '现实世界资产',
    tabPrivacy: '隐私',
    tabStorage: '存储',
  },
  kr: {
    documentTitle: '크립토 대시보드',
    title: '크립토 대시보드',
    subtitle: 'CoinGecko 실시간 시세',
    searchPlaceholder: '이름 또는 심볼로 검색…',
    refresh: '새로고침',
    refreshing: '새로고침 중…',
    updatedPrefix: '업데이트',
    marketCapLabel: '시가총액',
    label24h: '24시간',
    changeUnavailable: '24시간 —',
    loading: '시세 불러오는 중…',
    errorTitle: '시세를 불러올 수 없습니다',
    tryAgain: '다시 시도',
    errorHttp: '요청 실패 ({{status}}). 잠시 후 다시 시도해 주세요.',
    errorUnexpected: 'API 응답 형식이 예상과 다릅니다.',
    errorNetwork: '네트워크 오류입니다. 연결을 확인한 뒤 다시 시도해 주세요.',
    emptyNoMatch:
      '이 화면에서 “{{query}}”와 일치하는 코인이 없습니다. 검색어나 카테고리를 바꿔 보세요.',
    footerBefore: '데이터 출처: ',
    footerAfter: '. 학습용이며 투자 조언이 아닙니다.',
    langSwitcherAria: '언어',
    categoryNavAria: '카테고리',
    summaryTitle: '포트폴리오 요약',
    summaryLiveHint:
      '아래 수치는 카테고리 탭 + 검색 필터를 반영합니다(추가 API 호출 없음).',
    summaryTotalMcap: '총 시가총액',
    summaryAvgChange24h: '평균 24시간 등락',
    summaryAssets: '현재 보기 자산 수',
    summaryLastUpdated: '마지막 업데이트',
    topMoversTitle: '주요 상승',
    topMoversSubtitle: '현재 필터에서 24시간 수익률이 가장 높은 자산',
    topMoversEmpty: '이 화면에 24시간 등락 데이터가 없습니다.',
    marketOverviewTitle: '시장 개요',
    marketOverviewCaption:
      '현재 필터에서 시가총액 상위 {{n}}개 (막대는 표시된 행 중 최대값 기준).',
    marketOverviewEmpty: '이 화면에 시가총액 데이터가 없습니다.',
    rankShort: '순위',
    rowPrice: '가격',
    rowChange24h: '24시간 등락',
    volumeLabel24h: '24시간 거래량',
    allAssetsTitle: '자산 목록',
    tabAll: '전체',
    tabLayer1: '레이어 1',
    tabLayer2: '레이어 2',
    tabDefi: 'DeFi',
    tabMeme: '밈',
    tabAi: 'AI',
    tabGaming: '게임',
    tabInfrastructure: '인프라',
    tabOracle: '오라클',
    tabExchange: '거래소',
    tabStablecoins: '스테이블코인',
    tabRwa: 'RWA',
    tabPrivacy: '프라이버시',
    tabStorage: '스토리지',
  },
}

function formatUsd(price) {
  if (price == null) return '—'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: price < 1 ? 4 : 2,
    maximumFractionDigits: price < 1 ? 6 : 2,
  }).format(price)
}

function formatCompactUsd(value) {
  if (value == null) return '—'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value)
}

/** Maps structured API errors to the correct sentence for the active language. */
function getErrorDetail(error, t) {
  switch (error.code) {
    case 'HTTP':
      return t.errorHttp.replace('{{status}}', String(error.status))
    case 'UNEXPECTED':
      return t.errorUnexpected
    case 'NETWORK':
      return t.errorNetwork
    default:
      return t.errorUnexpected
  }
}

/**
 * From a list of coin rows, compute summary numbers for the portfolio strip.
 * Called with the *filtered* list so totals match what the user is looking at.
 */
function buildSummaryStats(coins) {
  let totalMcap = 0
  let changeSum = 0
  let changeCount = 0
  for (const c of coins) {
    if (c.market_cap != null) totalMcap += c.market_cap
    if (c.price_change_percentage_24h != null) {
      changeSum += c.price_change_percentage_24h
      changeCount += 1
    }
  }
  return {
    totalMcap,
    avgChange24h: changeCount > 0 ? changeSum / changeCount : null,
    assetCount: coins.length,
  }
}

function changeClassForValue(change) {
  if (change == null) return 'metric--neutral'
  return change >= 0 ? 'metric--up' : 'metric--down'
}

/** Turns a category key into the visible tab/badge label for the active language. */
function categoryLabel(t, categoryKey) {
  const map = {
    all: t.tabAll,
    layer1: t.tabLayer1,
    layer2: t.tabLayer2,
    defi: t.tabDefi,
    meme: t.tabMeme,
    ai: t.tabAi,
    gaming: t.tabGaming,
    infrastructure: t.tabInfrastructure,
    oracle: t.tabOracle,
    exchange: t.tabExchange,
    stablecoins: t.tabStablecoins,
    rwa: t.tabRwa,
    privacy: t.tabPrivacy,
    storage: t.tabStorage,
  }
  return map[categoryKey] ?? categoryKey
}

/**
 * Horizontal category tabs: purple active pill, scrollable on small screens.
 * Filtering happens in React state — no extra API calls when switching tabs.
 */
function CategoryTabs({ activeCategory, onSelect, t }) {
  return (
    <nav className="category-tabs" aria-label={t.categoryNavAria}>
      <div className="category-tabs__scroll">
        {CATEGORY_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            className={
              activeCategory === key
                ? 'category-tabs__btn category-tabs__btn--active'
                : 'category-tabs__btn'
            }
            onClick={() => onSelect(key)}
            aria-pressed={activeCategory === key}
          >
            {categoryLabel(t, key)}
          </button>
        ))}
      </div>
    </nav>
  )
}

/**
 * Segmented control: three options, purple “pill” for the active language.
 * `aria-pressed` helps screen readers understand which segment is selected.
 */
function LanguageSwitcher({ activeId, onSelect }) {
  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={TRANSLATIONS[activeId].langSwitcherAria}
    >
      {LANGUAGES.map((lang) => (
        <button
          key={lang.id}
          type="button"
          className={
            activeId === lang.id
              ? 'lang-switch__segment lang-switch__segment--active'
              : 'lang-switch__segment'
          }
          onClick={() => onSelect(lang.id)}
          aria-pressed={activeId === lang.id}
        >
          {lang.switcherLabel}
        </button>
      ))}
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState('en')
  const [category, setCategory] = useState('all')
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  /** Structured errors translate when language changes; messages are not baked in English only. */
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [lastUpdated, setLastUpdated] = useState(null)

  const t = TRANSLATIONS[language]

  // Keep the browser tab title and <html lang> in sync with the selected language.
  useEffect(() => {
    document.title = t.documentTitle
    const htmlLang =
      language === 'zh' ? 'zh-CN' : language === 'kr' ? 'ko' : 'en'
    document.documentElement.lang = htmlLang
  }, [language, t.documentTitle])

  /**
   * Single fetch for the whole watchlist (ids built from COIN_REGISTRY).
   * Category tabs and search only filter this array in memory — no refetch.
   */
  const fetchMarketData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        setCoins([])
        setError({ code: 'HTTP', status: response.status })
        return
      }
      const data = await response.json()
      if (!Array.isArray(data)) {
        setCoins([])
        setError({ code: 'UNEXPECTED' })
        return
      }
      // Preserve registry order so cards feel stable between refreshes.
      data.sort((a, b) => (REGISTRY_ORDER[a.id] ?? 999) - (REGISTRY_ORDER[b.id] ?? 999))
      setCoins(data)
      setLastUpdated(new Date())
      setError(null)
    } catch {
      setCoins([])
      setError({ code: 'NETWORK' })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMarketData()
  }, [fetchMarketData])

  /**
   * Step 1: category filter (All → show everything, else match COIN_CATEGORY).
   * Step 2: search filter on name/symbol.
   */
  const filteredCoins = useMemo(() => {
    let list =
      category === 'all'
        ? coins
        : coins.filter((c) => COIN_CATEGORY[c.id] === category)

    const q = search.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.symbol && c.symbol.toLowerCase().includes(q)),
      )
    }
    return list
  }, [coins, category, search])

  /** Summary + charts read from the same filtered list the grid uses. */
  const summaryStats = useMemo(
    () => buildSummaryStats(filteredCoins),
    [filteredCoins],
  )

  const topMovers = useMemo(() => {
    const ranked = [...filteredCoins].filter(
      (c) => c.price_change_percentage_24h != null,
    )
    ranked.sort(
      (a, b) =>
        b.price_change_percentage_24h - a.price_change_percentage_24h,
    )
    return ranked.slice(0, TOP_MOVERS_COUNT)
  }, [filteredCoins])

  /**
   * Market overview: take the largest market-cap names inside the current filter,
   * cap rows for readability, then scale bar width against the max in that subset.
   */
  const overviewSlice = useMemo(() => {
    const withMcap = [...filteredCoins].filter((c) => c.market_cap != null)
    withMcap.sort((a, b) => b.market_cap - a.market_cap)
    return withMcap.slice(0, OVERVIEW_TOP_N)
  }, [filteredCoins])

  const maxMarketCap = useMemo(() => {
    let max = 0
    for (const c of overviewSlice) {
      if (c.market_cap != null && c.market_cap > max) max = c.market_cap
    }
    return max
  }, [overviewSlice])

  const timeLocale = TIME_LOCALES[language]

  const formattedLastUpdated =
    lastUpdated != null
      ? lastUpdated.toLocaleString(timeLocale, {
          dateStyle: 'medium',
          timeStyle: 'medium',
        })
      : '—'

  const showDashboardBody = coins.length > 0 && !error

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div className="dashboard__brand">
          <span className="dashboard__logo" aria-hidden="true">
            ◈
          </span>
          <div>
            <h1 className="dashboard__title">{t.title}</h1>
            <p className="dashboard__subtitle">{t.subtitle}</p>
          </div>
        </div>
        <div className="dashboard__actions">
          {lastUpdated && !loading && (
            <span className="dashboard__updated">
              {t.updatedPrefix}{' '}
              {lastUpdated.toLocaleTimeString(timeLocale, {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </span>
          )}
          <div className="dashboard__controls">
            <LanguageSwitcher activeId={language} onSelect={setLanguage} />
            <button
              type="button"
              className="btn btn--primary"
              onClick={fetchMarketData}
              disabled={loading}
            >
              {loading ? t.refreshing : t.refresh}
            </button>
          </div>
        </div>
      </header>

      {showDashboardBody && (
        <section className="panel panel--flush" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="panel__title">
            {t.summaryTitle}
          </h2>
          <p className="panel__caption panel__caption--tight">{t.summaryLiveHint}</p>
          <div className="summary-grid">
            <div className="summary-card">
              <span className="summary-card__label">{t.summaryTotalMcap}</span>
              <span className="summary-card__value">
                {formatCompactUsd(summaryStats.totalMcap)}
              </span>
            </div>
            <div className="summary-card">
              <span className="summary-card__label">{t.summaryAvgChange24h}</span>
              <span
                className={`summary-card__value ${changeClassForValue(summaryStats.avgChange24h)}`}
              >
                {summaryStats.avgChange24h == null
                  ? '—'
                  : `${summaryStats.avgChange24h >= 0 ? '+' : ''}${summaryStats.avgChange24h.toFixed(2)}%`}
              </span>
            </div>
            <div className="summary-card">
              <span className="summary-card__label">{t.summaryAssets}</span>
              <span className="summary-card__value">{summaryStats.assetCount}</span>
            </div>
            <div className="summary-card">
              <span className="summary-card__label">{t.summaryLastUpdated}</span>
              <span className="summary-card__value summary-card__value--small">
                {formattedLastUpdated}
              </span>
            </div>
          </div>
        </section>
      )}

      <div className="dashboard__toolbar">
        <label className="search" htmlFor="coin-search">
          <span className="search__icon" aria-hidden="true">
            ⌕
          </span>
          <input
            id="coin-search"
            type="search"
            className="search__input"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
        </label>
      </div>

      <CategoryTabs activeCategory={category} onSelect={setCategory} t={t} />

      {loading && coins.length === 0 && (
        <div className="state state--loading" role="status" aria-live="polite">
          <div className="spinner" aria-hidden="true" />
          <p>{t.loading}</p>
        </div>
      )}

      {error && (
        <div className="state state--error" role="alert">
          <p className="state__title">{t.errorTitle}</p>
          <p className="state__detail">{getErrorDetail(error, t)}</p>
          <button type="button" className="btn btn--ghost" onClick={fetchMarketData}>
            {t.tryAgain}
          </button>
        </div>
      )}

      {!loading && !error && filteredCoins.length === 0 && coins.length > 0 && (
        <div className="state state--empty">
          <p>
            {t.emptyNoMatch.replace('{{query}}', search.trim() || '—')}
          </p>
        </div>
      )}

      {showDashboardBody && (
        <div className="dashboard__split">
          <section className="panel" aria-labelledby="movers-heading">
            <div className="panel__head">
              <h2 id="movers-heading" className="panel__title">
                {t.topMoversTitle}
              </h2>
              <p className="panel__caption">{t.topMoversSubtitle}</p>
            </div>
            {topMovers.length === 0 ? (
              <p className="panel__empty">{t.topMoversEmpty}</p>
            ) : (
              <ol className="movers-list">
                {topMovers.map((coin, index) => {
                  const ch = coin.price_change_percentage_24h
                  const rowClass =
                    ch == null
                      ? 'movers-list__change--neutral'
                      : ch >= 0
                        ? 'movers-list__change--up'
                        : 'movers-list__change--down'
                  return (
                    <li key={coin.id} className="movers-list__row">
                      <span className="movers-list__rank">{index + 1}</span>
                      <img
                        className="movers-list__icon"
                        src={coin.image}
                        alt=""
                        width={28}
                        height={28}
                      />
                      <div className="movers-list__name-block">
                        <span className="movers-list__name">{coin.name}</span>
                        <span className="movers-list__sym">
                          {coin.symbol?.toUpperCase()}
                        </span>
                      </div>
                      <span className={`movers-list__change ${rowClass}`}>
                        {ch == null
                          ? '—'
                          : `${ch >= 0 ? '+' : ''}${ch.toFixed(2)}%`}
                      </span>
                    </li>
                  )
                })}
              </ol>
            )}
          </section>

          <section className="panel" aria-labelledby="overview-heading">
            <div className="panel__head">
              <h2 id="overview-heading" className="panel__title">
                {t.marketOverviewTitle}
              </h2>
              {overviewSlice.length > 0 ? (
                <p className="panel__caption">
                  {t.marketOverviewCaption.replace(
                    '{{n}}',
                    String(overviewSlice.length),
                  )}
                </p>
              ) : null}
            </div>
            {maxMarketCap <= 0 || overviewSlice.length === 0 ? (
              <p className="panel__empty">{t.marketOverviewEmpty}</p>
            ) : (
              <ul className="overview-bars">
                {overviewSlice.map((coin) => {
                  const mcap = coin.market_cap ?? 0
                  const pct =
                    maxMarketCap > 0 ? Math.max(6, (mcap / maxMarketCap) * 100) : 0
                  return (
                    <li key={coin.id} className="overview-bars__row">
                      <div className="overview-bars__label">
                        <span className="overview-bars__sym">
                          {coin.symbol?.toUpperCase()}
                        </span>
                        <span className="overview-bars__mcap">
                          {formatCompactUsd(coin.market_cap)}
                        </span>
                      </div>
                      <div
                        className="overview-bars__track"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <div
                          className="overview-bars__fill"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </section>
        </div>
      )}

      {showDashboardBody && (
        <h2 className="assets-heading">
          {t.allAssetsTitle}
          <span className="assets-heading__count"> ({summaryStats.assetCount})</span>
        </h2>
      )}

      <ul className="coin-grid">
        {filteredCoins.map((coin) => {
          const change = coin.price_change_percentage_24h
          const changeClass =
            change == null
              ? 'coin-stat__value--neutral'
              : change >= 0
                ? 'coin-stat__value--up'
                : 'coin-stat__value--down'

          const catKey = COIN_CATEGORY[coin.id]

          return (
            <li key={coin.id} className="coin-card">
              <div className="coin-card__top">
                <img
                  className="coin-card__icon"
                  src={coin.image}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <div className="coin-card__identity">
                  <div className="coin-card__badges-row">
                    <span className="coin-card__rank-pill" title={t.rankShort}>
                      #{coin.market_cap_rank ?? '—'}
                    </span>
                    {catKey ? (
                      <span className="coin-card__category-badge">
                        {categoryLabel(t, catKey)}
                      </span>
                    ) : null}
                  </div>
                  <span className="coin-card__name">{coin.name}</span>
                  <span className="coin-card__symbol">{coin.symbol?.toUpperCase()}</span>
                </div>
              </div>

              <dl className="coin-card__stats">
                <div className="coin-stat">
                  <dt className="coin-stat__label">{t.rowPrice}</dt>
                  <dd className="coin-stat__value coin-stat__value--price">
                    {formatUsd(coin.current_price)}
                  </dd>
                </div>
                <div className="coin-stat">
                  <dt className="coin-stat__label">{t.rowChange24h}</dt>
                  <dd className={`coin-stat__value ${changeClass}`}>
                    {change == null ? (
                      t.changeUnavailable
                    ) : (
                      <>
                        {`${change >= 0 ? '+' : ''}${change.toFixed(2)}%`}
                        <span className="coin-stat__suffix">{t.label24h}</span>
                      </>
                    )}
                  </dd>
                </div>
                <div className="coin-stat">
                  <dt className="coin-stat__label">{t.marketCapLabel}</dt>
                  <dd className="coin-stat__value">
                    {formatCompactUsd(coin.market_cap)}
                  </dd>
                </div>
                <div className="coin-stat">
                  <dt className="coin-stat__label">{t.volumeLabel24h}</dt>
                  <dd className="coin-stat__value">
                    {formatCompactUsd(coin.total_volume)}
                  </dd>
                </div>
              </dl>
            </li>
          )
        })}
      </ul>

      <footer className="dashboard__footer">
        {t.footerBefore}
        <a
          href="https://www.coingecko.com/en/api"
          target="_blank"
          rel="noreferrer"
        >
          CoinGecko API
        </a>
        {t.footerAfter}
      </footer>
    </div>
  )
}

export default App
