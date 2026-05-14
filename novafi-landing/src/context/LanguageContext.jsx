import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { LOCALE_CODES, translations } from '../translations.js'

/**
 * Context holds the active locale and the matching translation object `t`.
 * Any child component can call useLanguage() to read strings or change language.
 */
const LanguageContext = createContext(null)

const STORAGE_KEY = 'novafi-locale'

function readStoredLocale() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw && LOCALE_CODES.includes(raw)) return raw
  } catch {
    /* private mode or blocked storage — ignore */
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => readStoredLocale() || 'en')

  const setLocale = useCallback((code) => {
    if (LOCALE_CODES.includes(code)) setLocaleState(code)
  }, [])

  // Keep <html lang="..."> in sync for accessibility & SEO when language changes.
  useEffect(() => {
    const map = { en: 'en', zh: 'zh-CN', ko: 'ko' }
    document.documentElement.lang = map[locale] ?? 'en'
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const t = translations[locale]

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used inside <LanguageProvider>.')
  }
  return ctx
}
