import { useMemo } from 'react'

// MUI Imports
import { deepmerge } from '@mui/utils'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Third-party Imports
import { useMedia } from 'react-use'

// Component Imports
import ModeChanger from './ModeChanger'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Theme Import
import defaultTheme from '@core/theme'

const CustomThemeProvider = ({ children, direction = 'ltr', systemMode = 'light' }) => {
  // Hooks
  const { settings } = useSettings()
  const isDark = useMedia('(prefers-color-scheme: dark)', systemMode === 'dark')

  // Determine current mode
  const currentMode = settings.mode === 'system' ? (isDark ? 'dark' : 'light') : settings.mode

  // Create theme
  const theme = useMemo(() => {
    const baseTheme = defaultTheme(settings, currentMode, direction)

    // You can add your theme customizations here
    const customizations = {}

    return createTheme(deepmerge(baseTheme, customizations))
  }, [settings, currentMode, direction])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModeChanger systemMode={systemMode} />
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider 