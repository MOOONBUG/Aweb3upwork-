/**
 * Central dictionary for all landing-page copy.
 * Each locale (en / zh / ko) shares the same structure so components stay simple:
 * use `const { t } = useLanguage()` then read `t.nav.features`, `t.hero.lead`, etc.
 */
export const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      roadmap: 'Roadmap',
      faq: 'FAQ',
      launchApp: 'Launch App',
      toggleMenu: 'Toggle menu',
      mainNav: 'Main',
      chooseLanguage: 'Choose language',
    },
    hero: {
      badge: '● Mainnet-ready preview',
      titleBefore: 'DeFi infrastructure that feels',
      titleHighlight: 'effortless',
      lead:
        'NovaFi connects wallets, liquidity, and yield in one secure layer. Built for builders and everyday users who want Web3 without the friction.',
      exploreFeatures: 'Explore features',
      readFaq: 'Read FAQ',
      cardHeader: 'Portfolio snapshot',
      statTotal: 'Total value',
      statNetwork: 'Network',
      statApy: 'APY (avg.)',
      statNetworkValue: 'NovaFi L2',
      statApyValue: '8.4%',
      statTotalValue: '$42,180',
    },
    features: {
      sectionTitle: 'Why NovaFi',
      sectionLead:
        'Everything you need to move value on-chain — without drowning in complexity.',
      items: [
        {
          id: 'security',
          title: 'Security-first design',
          body:
            'Smart contracts audited and monitored. Your keys stay in your wallet — NovaFi never custodies funds.',
        },
        {
          id: 'speed',
          title: 'Fast finality',
          body:
            'Purpose-built rollup delivers low latency and predictable fees, so transactions feel instant.',
        },
        {
          id: 'modules',
          title: 'Composable modules',
          body:
            'Plug in swaps, lending, and staking through one SDK. Ship products faster with fewer integrations.',
        },
      ],
    },
    howItWorks: {
      sectionTitle: 'How it works',
      sectionLead: 'Three steps from zero to yield. No jargon required.',
      steps: [
        {
          id: 'wallet',
          title: 'Connect your wallet',
          body:
            'Use any popular EVM wallet. NovaFi reads balances without moving assets.',
        },
        {
          id: 'strategy',
          title: 'Choose a strategy',
          body:
            'Pick curated vaults or route liquidity manually — fees are shown upfront.',
        },
        {
          id: 'earn',
          title: 'Earn & withdraw',
          body:
            'Rewards accrue continuously. Exit anytime with transparent settlement.',
        },
      ],
    },
    roadmap: {
      sectionTitle: 'Roadmap',
      sectionLead:
        'A transparent path from launch to community-owned protocol.',
      phases: [
        {
          id: 'q1',
          label: 'Q1 2026',
          title: 'Foundation',
          bullets: [
            'Public testnet',
            'Wallet SDK alpha',
            'Community grants',
          ],
        },
        {
          id: 'q2',
          label: 'Q2 2026',
          title: 'Growth',
          bullets: [
            'Mainnet launch',
            'Liquidity mining',
            'Partner integrations',
          ],
        },
        {
          id: 'q3',
          label: 'Q3 2026',
          title: 'Scale',
          bullets: [
            'Cross-chain bridges',
            'Institutional APIs',
            'Mobile app beta',
          ],
        },
        {
          id: 'q4',
          label: 'Q4 2026',
          title: 'Governance',
          bullets: [
            'DAO treasury',
            'Token vote live',
            'Research roadmap 2027',
          ],
        },
      ],
    },
    faq: {
      sectionTitle: 'FAQ',
      sectionLead: 'Quick answers about NovaFi. Tap a question to read more.',
      items: [
        {
          id: 'real',
          q: 'Is NovaFi a real company?',
          a:
            'NovaFi is a fictional project for this demo landing page. It shows how a Web3 product story could look in React.',
        },
        {
          id: 'experience',
          q: 'Do I need crypto experience?',
          a:
            'The UI is designed for beginners: plain language, clear fees, and guided flows. Advanced tools are available when you are ready.',
        },
        {
          id: 'wallets',
          q: 'Which wallets are supported?',
          a:
            'Any standard EVM wallet works (e.g. MetaMask, Rainbow, Coinbase Wallet). Hardware wallets are supported through browser providers.',
        },
        {
          id: 'fees',
          q: 'Are there fees?',
          a:
            'Network fees depend on chain activity. NovaFi charges a small protocol fee on certain vault strategies — always shown before you confirm.',
        },
      ],
    },
    footer: {
      tagline:
        'Next-generation DeFi infrastructure — fictional demo for a modern Web3 landing experience.',
      product: 'Product',
      legal: 'Legal',
      privacy: 'Privacy (demo)',
      terms: 'Terms (demo)',
      copyright: 'Demo project.',
      twitter: 'Twitter',
      discord: 'Discord',
      github: 'GitHub',
    },
  },

  zh: {
    nav: {
      features: '功能',
      howItWorks: '运作方式',
      roadmap: '路线图',
      faq: '常见问题',
      launchApp: '启动应用',
      toggleMenu: '展开或收起菜单',
      mainNav: '主导航',
      chooseLanguage: '选择语言',
    },
    hero: {
      badge: '● 主网就绪预览',
      titleBefore: '让 DeFi 基础设施',
      titleHighlight: '游刃有余',
      lead:
        'NovaFi 将钱包、流动性与收益聚合在同一安全层。为开发者和希望轻松使用 Web3 的用户而打造。',
      exploreFeatures: '了解功能',
      readFaq: '查看常见问题',
      cardHeader: '资产概览',
      statTotal: '总资产',
      statNetwork: '网络',
      statApy: '平均年化',
      statNetworkValue: 'NovaFi L2',
      statApyValue: '8.4%',
      statTotalValue: '$42,180',
    },
    features: {
      sectionTitle: '为何选择 NovaFi',
      sectionLead: '链上转移价值所需的一切——不再被复杂流程淹没。',
      items: [
        {
          id: 'security',
          title: '安全优先',
          body:
            '智能合约经审计与持续监控。私钥始终留在你的钱包——NovaFi 不托管资金。',
        },
        {
          id: 'speed',
          title: '快速确认',
          body:
            '专用 Rollup 带来低延迟与可预测手续费，让交易体验近乎即时。',
        },
        {
          id: 'modules',
          title: '可组合模块',
          body:
            '通过单一 SDK 接入兑换、借贷与质押。更少集成，更快上线产品。',
        },
      ],
    },
    howItWorks: {
      sectionTitle: '运作方式',
      sectionLead: '三步从零到收益。无需业内黑话。',
      steps: [
        {
          id: 'wallet',
          title: '连接钱包',
          body:
            '支持主流 EVM 钱包。NovaFi 仅读取余额，不会擅自转移资产。',
        },
        {
          id: 'strategy',
          title: '选择策略',
          body:
            '可使用精选金库或手动路由流动性——费用在确认前清晰展示。',
        },
        {
          id: 'earn',
          title: '赚取与提现',
          body:
            '收益持续累积。可随时退出，结算过程公开透明。',
        },
      ],
    },
    roadmap: {
      sectionTitle: '路线图',
      sectionLead: '从上线到社区主导协议的清晰路径。',
      phases: [
        {
          id: 'q1',
          label: '2026 Q1',
          title: '奠基',
          bullets: ['公开测试网', '钱包 SDK 内测', '社区资助'],
        },
        {
          id: 'q2',
          label: '2026 Q2',
          title: '增长',
          bullets: ['主网上线', '流动性挖矿', '合作伙伴接入'],
        },
        {
          id: 'q3',
          label: '2026 Q3',
          title: '扩展',
          bullets: ['跨链桥', '机构 API', '移动应用内测'],
        },
        {
          id: 'q4',
          label: '2026 Q4',
          title: '治理',
          bullets: ['DAO 金库', '代币投票上线', '2027 研究路线'],
        },
      ],
    },
    faq: {
      sectionTitle: '常见问题',
      sectionLead: '关于 NovaFi 的快速解答。点击问题展开。',
      items: [
        {
          id: 'real',
          q: 'NovaFi 是真实公司吗？',
          a:
            'NovaFi 是本演示落地页的虚构项目，用于展示 React 下的 Web3 产品叙事。',
        },
        {
          id: 'experience',
          q: '需要加密货币经验吗？',
          a:
            '界面面向初学者：直白文案、清晰手续费与引导流程。准备好后可使用进阶工具。',
        },
        {
          id: 'wallets',
          q: '支持哪些钱包？',
          a:
            '任意标准 EVM 钱包均可（如 MetaMask、Rainbow、Coinbase Wallet）。硬件钱包可通过浏览器提供商支持。',
        },
        {
          id: 'fees',
          q: '是否有手续费？',
          a:
            '网络手续费取决于链上活跃度。部分金库策略会收取少量协议费——确认前始终可见。',
        },
      ],
    },
    footer: {
      tagline:
        '新一代 DeFi 基础设施——虚构演示，呈现现代 Web3 落地体验。',
      product: '产品',
      legal: '法律信息',
      privacy: '隐私（演示）',
      terms: '条款（演示）',
      copyright: '演示项目。',
      twitter: 'Twitter',
      discord: 'Discord',
      github: 'GitHub',
    },
  },

  ko: {
    nav: {
      features: '기능',
      howItWorks: '작동 방식',
      roadmap: '로드맵',
      faq: 'FAQ',
      launchApp: '앱 실행',
      toggleMenu: '메뉴 열기/닫기',
      mainNav: '주요',
      chooseLanguage: '언어 선택',
    },
    hero: {
      badge: '● 메인넷 준비 프리뷰',
      titleBefore: '디파이 인프라를',
      titleHighlight: '더 쉽게',
      lead:
        'NovaFi는 지갑·유동성·수익을 하나의 안전한 레이어로 연결합니다. 복잡함 없이 Web3를 쓰고 싶은 빌더와 일반 사용자를 위해 만들었습니다.',
      exploreFeatures: '기능 살펴보기',
      readFaq: 'FAQ 보기',
      cardHeader: '포트폴리오 스냅샷',
      statTotal: '총 자산',
      statNetwork: '네트워크',
      statApy: '평균 APY',
      statNetworkValue: 'NovaFi L2',
      statApyValue: '8.4%',
      statTotalValue: '$42,180',
    },
    features: {
      sectionTitle: 'NovaFi를 선택하는 이유',
      sectionLead:
        '온체인 가치 이동에 필요한 모든 것을 복잡함 없이 제공합니다.',
      items: [
        {
          id: 'security',
          title: '보안 우선 설계',
          body:
            '스마트 컨트랙트는 감사와 모니터링을 거칩니다. 키는 항상 사용자 지갑에 남으며 NovaFi는 자금을 보관하지 않습니다.',
        },
        {
          id: 'speed',
          title: '빠른 확정성',
          body:
            '목적형 롤업으로 낮은 지연과 예측 가능한 수수료를 제공해 거래가 즉각적으로 느껴집니다.',
        },
        {
          id: 'modules',
          title: '조합 가능한 모듈',
          body:
            '하나의 SDK로 스왑·대출·스테이킹을 연결합니다. 통합 부담을 줄이고 더 빠르게 제품을 출시하세요.',
        },
      ],
    },
    howItWorks: {
      sectionTitle: '작동 방식',
      sectionLead: '수익까지 세 단계. 어려운 용어는 필요 없습니다.',
      steps: [
        {
          id: 'wallet',
          title: '지갑 연결',
          body:
            '주요 EVM 지갑을 사용할 수 있습니다. NovaFi는 잔액만 읽으며 자산을 옮기지 않습니다.',
        },
        {
          id: 'strategy',
          title: '전략 선택',
          body:
            '큐레이션 볼트를 고르거나 유동성을 직접 라우팅합니다. 수수료는 확인 전에 표시됩니다.',
        },
        {
          id: 'earn',
          title: '수익 및 출금',
          body:
            '보상은 지속적으로 쌓입니다. 언제든지 투명한 정산으로 출금할 수 있습니다.',
        },
      ],
    },
    roadmap: {
      sectionTitle: '로드맵',
      sectionLead:
        '출시부터 커뮤니티 소유 프로토콜까지 투명한 여정입니다.',
      phases: [
        {
          id: 'q1',
          label: '2026 Q1',
          title: '기반',
          bullets: ['퍼블릭 테스트넷', '지갑 SDK 알파', '커뮤니티 그랜트'],
        },
        {
          id: 'q2',
          label: '2026 Q2',
          title: '성장',
          bullets: ['메인넷 출시', '유동성 마이닝', '파트너 통합'],
        },
        {
          id: 'q3',
          label: '2026 Q3',
          title: '확장',
          bullets: ['크로스체인 브릿지', '기관용 API', '모바일 앱 베타'],
        },
        {
          id: 'q4',
          label: '2026 Q4',
          title: '거버넌스',
          bullets: ['DAO 재무', '토큰 투표 라이브', '2027 연구 로드맵'],
        },
      ],
    },
    faq: {
      sectionTitle: 'FAQ',
      sectionLead: 'NovaFi에 대한 빠른 답변. 질문을 눌러 자세히 보세요.',
      items: [
        {
          id: 'real',
          q: 'NovaFi는 실제 회사인가요?',
          a:
            'NovaFi는 이 데모 랜딩 페이지를 위한 가상의 프로젝트이며, React로 Web3 스토리를 어떻게 보여줄 수 있는지 예시입니다.',
        },
        {
          id: 'experience',
          q: '암호화폐 경험이 필요한가요?',
          a:
            '초보자를 위해 평이한 문구, 명확한 수수료, 안내 흐름을 제공합니다. 준비가 되면 고급 도구도 이용할 수 있습니다.',
        },
        {
          id: 'wallets',
          q: '어떤 지갑을 지원하나요?',
          a:
            '표준 EVM 지갑은 모두 사용할 수 있습니다(예: MetaMask, Rainbow, Coinbase Wallet). 하드웨어 지갑은 브라우저 프로바이더를 통해 지원됩니다.',
        },
        {
          id: 'fees',
          q: '수수료가 있나요?',
          a:
            '네트워크 수수료는 체인 활동에 따라 달라집니다. 일부 볼트 전략에는 소액의 프로토콜 수수료가 있으며 확인 전에 항상 표시됩니다.',
        },
      ],
    },
    footer: {
      tagline:
        '차세대 DeFi 인프라 — 현대적인 Web3 랜딩 경험을 보여주는 가상 데모입니다.',
      product: '제품',
      legal: '법적 고지',
      privacy: '개인정보(데모)',
      terms: '약관(데모)',
      copyright: '데모 프로젝트.',
      twitter: 'Twitter',
      discord: 'Discord',
      github: 'GitHub',
    },
  },
}

/** Short codes used in React state and localStorage */
export const LOCALE_CODES = ['en', 'zh', 'ko']
