// React Imports
import { createContext, useContext, useState } from 'react';

// Config Imports
import themeConfig from '../../@core/configs/themeConfig';
import primaryColorConfig from '../../@core/configs/primaryColorConfig';

const initialSettings = {
  mode: themeConfig.mode || 'light',
  skin: themeConfig.skin || 'default',
  layout: themeConfig.layout || 'vertical',
  direction: 'ltr',
  primaryColor: '#666CFF',
  contentWidth: themeConfig.contentWidth || 'boxed',
  navCollapsed: false,
  navHidden: false,
  lastLayout: 'vertical',
  footerFixed: false
};

const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: () => null
});

export const SettingsProvider = ({ children, defaultSettings = {} }) => {
  const [settings, setSettings] = useState({ ...initialSettings, ...defaultSettings });

  const saveSettings = (updatedSettings) => {
    setSettings(updatedSettings);
    // You can add localStorage or cookie storage here if needed
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export default SettingsContext; 