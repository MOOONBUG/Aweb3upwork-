import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Segmented control labels are short for the navbar (locale logic unchanged).
 */
const OPTIONS = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: 'KR' },
]

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={t.nav.chooseLanguage}>
      {OPTIONS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-switch__btn ${locale === code ? 'is-active' : ''}`}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
