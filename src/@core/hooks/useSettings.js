// React Imports
import { createContext, useContext, useState } from 'react'

const defaultSettings = {
  skin: 'default',
  mode: 'light',
  layout: 'vertical',
  contentWidth: 'wide',
  navCollapsed: false,
  verticalNavToggle: true,
  navbarContentWidth: 'wide',
  footerContentWidth: 'wide',
  semiDark: false
}

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => null
})

export const SettingsProvider = ({ children }) => {
  // States
  const [settings, setSettings] = useState(defaultSettings)

  const saveSettings = updatedSettings => {
    setSettings(updatedSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

  return context
}

export default useSettings 