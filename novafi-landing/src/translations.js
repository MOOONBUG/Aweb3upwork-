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
      badge: '● Security-first Web3 infrastructure',
      titleBefore: 'Enterprise-grade crypto infrastructure for',
      titleHighlight: 'trust',
      titleAfter: 'and scale',
      lead:
        'NovaFi unifies custody-free asset workflows, cross-chain operations, and developer-ready rails in one secure layer — built for teams that need compliance-minded execution without the template look.',
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
      sectionTitle: 'Infrastructure designed for trust',
      sectionLead:
        'A clear operating layer for security, compliance, and cross-chain asset movement.',
      items: [
        {
          id: 'security',
          title: 'Security and compliance posture',
          body:
            'Audited contracts, monitoring hooks, and permission-aware flows keep NovaFi aligned with enterprise risk expectations. Funds remain non-custodial by design.',
        },
        {
          id: 'speed',
          title: 'Cross-chain execution layer',
          body:
            'Route assets across networks with predictable settlement paths, transparent fees, and reliable finality for operating teams.',
        },
        {
          id: 'modules',
          title: 'Developer-friendly workflows',
          body:
            'One SDK exposes swaps, vaults, and treasury flows so product teams can ship faster without stitching together fragile integrations.',
        },
      ],
    },
    howItWorks: {
      sectionEyebrow: 'Operational flow',
      sectionTitle: 'How operations move through NovaFi',
      sectionLead:
        'A secure operating path for asset controls, cross-chain execution, and audit-ready team workflows.',
      steps: [
        {
          id: 'wallet',
          label: 'Step 01',
          kicker: 'Trusted access layer',
          title: 'Connect policy-approved wallets',
          body:
            'Connect standard EVM wallets or approved custody providers. NovaFi reads balances and permissions without taking custody or moving assets.',
        },
        {
          id: 'strategy',
          label: 'Step 02',
          kicker: 'Execution policy',
          title: 'Set the workflow',
          body:
            'Choose treasury routes, vault policies, or cross-chain execution paths. Costs, controls, and execution rules are shown before you confirm.',
        },
        {
          id: 'earn',
          label: 'Step 03',
          kicker: 'Reporting trail',
          title: 'Track, settle, and report',
          body:
            'Monitor positions, settle with transparency, and export the operational trail your finance, risk, and ops teams need.',
        },
      ],
    },
    roadmap: {
      sectionEyebrow: 'Delivery path',
      sectionTitle: 'Roadmap',
      sectionLead:
        'A measured rollout from controlled launch to multi-chain, infrastructure-grade operations.',
      phases: [
        {
          id: 'q1',
          label: 'Phase 01',
          title: 'Controlled launch',
          summary: 'Build trust foundations before widening access.',
          bullets: [
            'Security review and audits',
            'Private testnet for partners',
            'Developer SDK alpha',
          ],
        },
        {
          id: 'q2',
          label: 'Phase 02',
          title: 'Operational expansion',
          summary: 'Open core workflows with stricter policy controls.',
          bullets: [
            'Mainnet launch with policy controls',
            'Treasury and vault workflows',
            'Partner and custody integrations',
          ],
        },
        {
          id: 'q3',
          label: 'Phase 03',
          title: 'Cross-chain scale',
          summary: 'Expand routing, analytics, and institutional access.',
          bullets: [
            'Cross-chain routing',
            'Institutional API suite',
            'Workflow analytics dashboard',
          ],
        },
        {
          id: 'q4',
          label: 'Phase 04',
          title: 'Protocol maturity',
          summary: 'Harden governance, controls, and reporting.',
          bullets: [
            'Governance and controls layer',
            'Compliance reporting exports',
            '2027 expansion blueprint',
          ],
        },
      ],
    },
    faq: {
      sectionTitle: 'FAQ',
      sectionLead:
        'Concise answers for security, treasury, operations, and integration teams.',
      items: [
        {
          id: 'real',
          q: 'Is NovaFi production-ready?',
          a:
            'This landing page is a fictional demo, but the information architecture is shaped like a credible Web3 infrastructure platform for enterprise trust.',
        },
        {
          id: 'experience',
          q: 'Is it developer-friendly?',
          a:
            'Yes. The copy, workflows, and feature structure are built for teams that want clear APIs, predictable execution, and low-friction integration.',
        },
        {
          id: 'wallets',
          q: 'Which wallets and custody setups are supported?',
          a:
            'Standard EVM wallets and approved custody setups fit the flow. Hardware wallets can be supported through browser-based providers where the integration allows it.',
        },
        {
          id: 'fees',
          q: 'How are fees handled?',
          a:
            'Network fees depend on the target chain. Any protocol fee or route cost is disclosed before confirmation so teams can plan execution with fewer surprises.',
        },
      ],
    },
    footer: {
      tagline:
        'Security-first Web3 infrastructure for teams that run with trust, controls, and precision.',
      product: 'Platform',
      legal: 'Governance',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: 'Demo concept — not a live protocol.',
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
      badge: '● 安全优先的 Web3 基础设施',
      titleBefore: '面向机构级信任的加密基础设施，',
      titleHighlight: '更稳健',
      titleAfter: '更可扩展',
      lead:
        'NovaFi 在同一安全层内整合资产工作流、跨链操作与开发者能力，帮助团队以合规思维完成执行，而不是停留在模板化叙事。',
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
      sectionTitle: '为信任而设计的基础设施',
      sectionLead: '面向安全、合规与跨链资产流转的清晰运营层。',
      items: [
        {
          id: 'security',
          title: '安全与合规姿态',
          body:
            '经过审计的合约、监控机制与权限感知流程，使 NovaFi 更贴近企业级风险要求；资金始终保持非托管。',
        },
        {
          id: 'speed',
          title: '跨链执行层',
          body:
            '在多链之间进行资产路由，提供可预测的结算路径、透明费用与稳定的最终性。',
        },
        {
          id: 'modules',
          title: '开发者友好工作流',
          body:
            '一个 SDK 即可覆盖兑换、金库与资金管理流程，减少脆弱集成，加快上线节奏。',
        },
      ],
    },
    howItWorks: {
      sectionEyebrow: '运营流程',
      sectionTitle: 'NovaFi 中的运作路径',
      sectionLead: '面向资产控制、跨链执行与可审计运营的安全工作流。',
      steps: [
        {
          id: 'wallet',
          label: '步骤 01',
          kicker: '可信接入层',
          title: '连接已批准的钱包',
          body:
            '支持标准 EVM 钱包或已批准的托管方案。NovaFi 只读取余额与权限，不会托管或移动资产。',
        },
        {
          id: 'strategy',
          label: '步骤 02',
          kicker: '执行策略',
          title: '设定工作流',
          body:
            '选择资金管理路径、金库策略或跨链执行路径。费用、控制项与执行规则会在确认前展示。',
        },
        {
          id: 'earn',
          label: '步骤 03',
          kicker: '报告留痕',
          title: '追踪、结算与汇报',
          body:
            '持续追踪仓位、透明结算，并导出财务、风控与运营团队所需的记录。',
        },
      ],
    },
    roadmap: {
      sectionEyebrow: '交付路径',
      sectionTitle: '路线图',
      sectionLead: '从受控上线稳步推进至多链、基础设施级运营。',
      phases: [
        {
          id: 'q1',
          label: '阶段 01',
          title: '受控上线',
          summary: '先建立信任基础，再逐步扩大接入。',
          bullets: ['安全审计与复核', '合作方私有测试网', '开发者 SDK Alpha'],
        },
        {
          id: 'q2',
          label: '阶段 02',
          title: '运营扩展',
          summary: '在更严格的策略控制下开放核心流程。',
          bullets: ['主网上线并启用策略控制', '资金与金库工作流', '合作与托管集成'],
        },
        {
          id: 'q3',
          label: '阶段 03',
          title: '跨链扩展',
          summary: '扩展路由、分析与机构接入能力。',
          bullets: ['跨链路由', '机构 API 套件', '工作流分析面板'],
        },
        {
          id: 'q4',
          label: '阶段 04',
          title: '协议成熟',
          summary: '强化治理、控制与合规报表能力。',
          bullets: ['治理与控制层', '合规报表导出', '2027 扩展蓝图'],
        },
      ],
    },
    faq: {
      sectionTitle: '常见问题',
      sectionLead: '面向安全、资金、运营与集成团队的简明答案。',
      items: [
        {
          id: 'real',
          q: 'NovaFi 已达到可上线标准吗？',
          a:
            '此页面是虚构演示，但其信息架构按可信的 Web3 基础设施产品标准来设计。',
        },
        {
          id: 'experience',
          q: '是否适合开发者集成？',
          a:
            '适合。文案、流程与功能结构都针对需要清晰 API、可预测执行与低摩擦集成的团队。',
        },
        {
          id: 'wallets',
          q: '支持哪些钱包和托管方案？',
          a:
            '标准 EVM 钱包与已批准的托管方案均可接入。硬件钱包可通过浏览器提供商支持。',
        },
        {
          id: 'fees',
          q: '费用如何处理？',
          a:
            '网络费用取决于目标链。任何协议费或路由费都会在确认前明确披露，方便团队规划执行。',
        },
      ],
    },
    footer: {
      tagline:
        '以安全、信任与执行精度为核心的 Web3 基础设施。',
      product: '平台',
      legal: '治理',
      privacy: '隐私',
      terms: '条款',
      copyright: '演示概念，非上线协议。',
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
      badge: '● 보안 우선 Web3 인프라',
      titleBefore: '신뢰를 중심으로 설계된 크립토 인프라,',
      titleHighlight: '더 견고하게',
      titleAfter: '더 확장 가능하게',
      lead:
        'NovaFi는 자산 워크플로, 크로스체인 운영, 개발자 기능을 하나의 안전한 레이어로 묶어 합리적이고 규정 친화적인 실행을 돕습니다.',
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
      sectionTitle: '신뢰를 위해 설계된 인프라',
      sectionLead: '보안, 규정 준수, 크로스체인 자산 흐름을 위한 운영 레이어입니다.',
      items: [
        {
          id: 'security',
          title: '보안과 규정 준수',
          body:
            '감사된 컨트랙트, 모니터링 체계, 권한 인지 흐름으로 엔터프라이즈 수준의 위험 기준에 맞춥니다. 자금은 비수탁 구조로 유지됩니다.',
        },
        {
          id: 'speed',
          title: '크로스체인 실행 레이어',
          body:
            '다중 체인 자산 라우팅, 예측 가능한 정산 경로, 투명한 수수료, 안정적인 최종성을 제공합니다.',
        },
        {
          id: 'modules',
          title: '개발자 친화적 워크플로',
          body:
            '하나의 SDK로 스왑, 볼트, 자금 운영 흐름을 제공해 불안정한 통합 없이 빠르게 출시할 수 있습니다.',
        },
      ],
    },
    howItWorks: {
      sectionEyebrow: '운영 흐름',
      sectionTitle: 'NovaFi에서 운영되는 방식',
      sectionLead: '자산 통제, 크로스체인 실행, 감사 가능성을 위한 보안 워크플로입니다.',
      steps: [
        {
          id: 'wallet',
          label: '단계 01',
          kicker: '신뢰 가능한 접근 계층',
          title: '승인된 지갑 연결',
          body:
            '표준 EVM 지갑 또는 승인된 커스터디를 연결합니다. NovaFi는 잔액과 권한만 읽고 자산을 보관하거나 이동하지 않습니다.',
        },
        {
          id: 'strategy',
          label: '단계 02',
          kicker: '실행 정책',
          title: '워크플로 설정',
          body:
            '자금 운영 경로, 볼트 정책, 크로스체인 실행 경로를 선택합니다. 수수료, 제어 항목, 실행 규칙이 확인 전에 표시됩니다.',
        },
        {
          id: 'earn',
          label: '단계 03',
          kicker: '보고 추적선',
          title: '추적, 정산, 보고',
          body:
            '포지션을 추적하고 투명하게 정산하며, 재무·리스크·운영 팀에 필요한 기록을 내보낼 수 있습니다.',
        },
      ],
    },
    roadmap: {
      sectionEyebrow: '전개 경로',
      sectionTitle: '로드맵',
      sectionLead:
        '통제된 출시에서 멀티체인, 인프라급 운영으로 이어지는 신중한 전개입니다.',
      phases: [
        {
          id: 'q1',
          label: '단계 01',
          title: '통제된 출시',
          summary: '확장 전에 신뢰 기반을 먼저 구축합니다.',
          bullets: ['보안 감사 및 검토', '파트너용 프라이빗 테스트넷', '개발자 SDK 알파'],
        },
        {
          id: 'q2',
          label: '단계 02',
          title: '운영 확장',
          summary: '더 강한 정책 제어로 핵심 워크플로를 엽니다.',
          bullets: ['정책 제어가 적용된 메인넷', '자금 및 볼트 워크플로', '파트너·커스터디 통합'],
        },
        {
          id: 'q3',
          label: '단계 03',
          title: '크로스체인 확장',
          summary: '라우팅, 분석, 기관 접근을 확장합니다.',
          bullets: ['크로스체인 라우팅', '기관용 API 세트', '워크플로 분석 대시보드'],
        },
        {
          id: 'q4',
          label: '단계 04',
          title: '프로토콜 성숙',
          summary: '거버넌스, 제어, 보고 체계를 강화합니다.',
          bullets: ['거버넌스 및 제어 레이어', '규정 준수 리포트 내보내기', '2027 확장 청사진'],
        },
      ],
    },
    faq: {
      sectionTitle: 'FAQ',
      sectionLead: '보안, 재무, 운영, 통합 팀을 위한 간결한 답변입니다.',
      items: [
        {
          id: 'real',
          q: 'NovaFi는 상용 수준인가요?',
          a:
            '이 랜딩은 가상 데모지만, 정보 구조는 신뢰할 수 있는 Web3 인프라 제품 기준으로 설계했습니다.',
        },
        {
          id: 'experience',
          q: '개발자 친화적인가요?',
          a:
            '그렇습니다. 명확한 API, 예측 가능한 실행, 낮은 통합 마찰을 필요로 하는 팀에 맞춰 설계했습니다.',
        },
        {
          id: 'wallets',
          q: '어떤 지갑과 커스터디를 지원하나요?',
          a:
            '표준 EVM 지갑과 승인된 커스터디를 지원합니다. 하드웨어 지갑은 브라우저 제공자를 통해 연동할 수 있습니다.',
        },
        {
          id: 'fees',
          q: '수수료는 어떻게 처리되나요?',
          a:
            '네트워크 수수료는 대상 체인에 따라 달라집니다. 프로토콜 수수료나 라우팅 비용이 있으면 확인 전에 명확히 표시됩니다.',
        },
      ],
    },
    footer: {
      tagline:
        '신뢰, 통제, 정밀한 실행을 위한 보안 우선 Web3 인프라입니다.',
      product: '플랫폼',
      legal: '거버넌스',
      privacy: '개인정보',
      terms: '약관',
      copyright: '데모 컨셉, 운영 중인 프로토콜 아님.',
      twitter: 'Twitter',
      discord: 'Discord',
      github: 'GitHub',
    },
  },
}

/** Short codes used in React state and localStorage */
export const LOCALE_CODES = ['en', 'zh', 'ko']
