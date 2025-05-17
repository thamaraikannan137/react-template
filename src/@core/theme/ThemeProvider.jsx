'use client'

// React Imports
import { useMemo } from 'react'

// MUI Imports
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Config Imports
import themeConfig from '../../configs/themeConfig'

// Hook Imports
import { useSettings } from '../hooks/useSettings'

// Theme Options
const ThemeOptions = {
  light: {
    palette: {
      mode: 'light',
      primary: themeConfig.palette.primary,
      secondary: themeConfig.palette.secondary,
      success: themeConfig.palette.success,
      error: themeConfig.palette.error,
      warning: themeConfig.palette.warning,
      info: themeConfig.palette.info,
      background: {
        paper: '#FFF',
        default: '#F4F5FA'
      },
      divider: 'rgba(47, 43, 61, 0.12)'
    }
  },
  dark: {
    palette: {
      mode: 'dark',
      primary: themeConfig.palette.primary,
      secondary: themeConfig.palette.secondary,
      success: themeConfig.palette.success,
      error: themeConfig.palette.error,
      warning: themeConfig.palette.warning,
      info: themeConfig.palette.info,
      background: {
        paper: '#2F2B3A',
        default: '#25293C'
      },
      divider: 'rgba(255, 255, 255, 0.12)'
    }
  }
}

const ThemeProvider = ({ children }) => {
  // Hooks
  const { settings } = useSettings()

  // Create theme based on mode
  const theme = useMemo(() => {
    const themeOptions = settings.mode === 'light' ? ThemeOptions.light : ThemeOptions.dark

    return createTheme({
      ...themeOptions,
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536
        }
      },
      shape: {
        borderRadius: 6
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      },
      typography: {
        fontFamily: '"Inter", sans-serif'
      },
      shadows: [
        'none',
        '0px 2px 4px rgba(47, 43, 61, 0.12)',
        '0px 3px 6px rgba(47, 43, 61, 0.14)',
        '0px 4px 8px rgba(47, 43, 61, 0.16)',
        '0px 6px 12px rgba(47, 43, 61, 0.18)',
        '0px 8px 16px rgba(47, 43, 61, 0.2)',
        '0px 12px 24px rgba(47, 43, 61, 0.22)',
        '0px 16px 32px rgba(47, 43, 61, 0.24)',
        '0px 20px 40px rgba(47, 43, 61, 0.26)',
        '0px 24px 48px rgba(47, 43, 61, 0.28)',
        '0px 28px 56px rgba(47, 43, 61, 0.3)',
        '0px 32px 64px rgba(47, 43, 61, 0.32)',
        '0px 36px 72px rgba(47, 43, 61, 0.34)',
        '0px 40px 80px rgba(47, 43, 61, 0.36)',
        '0px 44px 88px rgba(47, 43, 61, 0.38)',
        '0px 48px 96px rgba(47, 43, 61, 0.4)',
        '0px 52px 104px rgba(47, 43, 61, 0.42)',
        '0px 56px 112px rgba(47, 43, 61, 0.44)',
        '0px 60px 120px rgba(47, 43, 61, 0.46)',
        '0px 64px 128px rgba(47, 43, 61, 0.48)',
        '0px 68px 136px rgba(47, 43, 61, 0.5)',
        '0px 72px 144px rgba(47, 43, 61, 0.52)',
        '0px 76px 152px rgba(47, 43, 61, 0.54)',
        '0px 80px 160px rgba(47, 43, 61, 0.56)',
        '0px 84px 168px rgba(47, 43, 61, 0.58)'
      ]
    })
  }, [settings.mode])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider 