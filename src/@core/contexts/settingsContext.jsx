import { createContext, useMemo, useState } from 'react'

// Config Imports
import themeConfig from '../configs/themeConfig'
import primaryColorConfig from '../configs/primaryColorConfig'

// Hook Imports
import { useObjectCookie } from '../hooks/useObjectCookie'

// Initial Settings Context
export const SettingsContext = createContext({})

export const SettingsProvider = ({ children, settingsCookie = {}, mode }) => {
  // Initial Settings
  const initialSettings = {
    mode: themeConfig.mode,
    skin: themeConfig.skin,
    semiDark: themeConfig.semiDark,
    layout: themeConfig.layout,
    navbarContentWidth: themeConfig.navbar.contentWidth,
    contentWidth: themeConfig.contentWidth,
    footerContentWidth: themeConfig.footer.contentWidth,
    primaryColor: primaryColorConfig[0].main,
    direction: 'ltr',
    navbar: {
      type: themeConfig.navbar.type,
      floating: themeConfig.navbar.floating,
      detached: themeConfig.navbar.detached,
      blur: themeConfig.navbar.blur
    }
  }

  const updatedInitialSettings = {
    ...initialSettings,
    mode: mode || themeConfig.mode
  }

  // Cookies
  const [settingsCookieValue, updateSettingsCookie] = useObjectCookie(
    themeConfig.settingsCookieName,
    JSON.stringify(Object.keys(settingsCookie).length ? settingsCookie : updatedInitialSettings)
  )

  // State
  const [settings, setSettings] = useState(
    Object.keys(settingsCookieValue).length ? settingsCookieValue : updatedInitialSettings
  )

  const updateSettings = (updatedSettings, options = {}) => {
    const { updateCookie = true } = options

    setSettings(prevSettings => {
      const newSettings = { ...prevSettings, ...updatedSettings }

      // Update cookie if needed
      if (updateCookie) {
        updateSettingsCookie(newSettings)
      }

      return newSettings
    })
  }

  // Function to update settings for a specific page without saving to cookie
  const updatePageSettings = (pageSettings) => {
    updateSettings(pageSettings, { updateCookie: false })

    // Return function to reset settings when component unmounts
    return () => updateSettings(settingsCookieValue, { updateCookie: false })
  }

  const resetSettings = () => {
    updateSettings(initialSettings)
  }

  const isSettingsChanged = useMemo(
    () => JSON.stringify(initialSettings) !== JSON.stringify(settings),
    [settings]
  )

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        isSettingsChanged,
        resetSettings,
        updatePageSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext 