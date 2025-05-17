// React Imports
import React, { createContext, useContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/material/utils';
import CssBaseline from '@mui/material/CssBaseline';

// Settings Context Import
import { useSettings } from '../../core/contexts/SettingsContext';

// Theme Config Import
import themeConfig from '../../@core/theme';

const ThemeContext = createContext({});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const { settings, saveSettings } = useSettings();

  const toggleTheme = () => {
    const newMode = settings.mode === 'light' ? 'dark' : 'light';
    saveSettings({ ...settings, mode: newMode });
  };

  const muiTheme = useMemo(() => {
    const baseTheme = themeConfig(settings, settings.mode, settings.direction || 'ltr');
    return createTheme(baseTheme);
  }, [settings]);

  return (
    <ThemeContext.Provider value={{ isDarkMode: settings.mode === 'dark', toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 