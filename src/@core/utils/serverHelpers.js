import Cookies from 'js-cookie'
import themeConfig from '../configs/themeConfig'

export const getSettingsFromCookie = () => {
  const cookieName = themeConfig.settingsCookieName
  const cookie = Cookies.get(cookieName)

  return JSON.parse(cookie || '{}')
}

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie()

  // Get mode from cookie or fallback to theme config
  return settingsCookie.mode || themeConfig.mode
}

export const getSystemMode = () => {
  if (typeof window === 'undefined') return 'light'
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const clearSettingsCookie = () => {
  Cookies.remove(themeConfig.settingsCookieName)
} 