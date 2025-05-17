// MUI Imports
import { alpha } from '@mui/material/styles'

const theme = (settings, mode, direction) => {
  // Shared Colors
  const { skin } = settings
  const white = '#FFF'
  const black = '#000'

  // Color System
  const mainColors = {
    primary: settings.primaryColor,
    secondary: '#6D788D',
    success: '#28C76F',
    error: '#FF4D49',
    warning: '#FDB528',
    info: '#26C6F9'
  }

  // Shadows
  const createShadow = (color) => {
    const transparent = alpha(color, 0.16)
    return {
      xs: `0 2px 8px ${transparent}`,
      sm: `0 4px 12px ${transparent}`,
      md: `0 6px 16px ${transparent}`,
      lg: `0 8px 20px ${transparent}`,
      xl: `0 10px 24px ${transparent}`
    }
  }

  const shadows = {
    light: createShadow(black),
    dark: createShadow(white)
  }

  // Typography
  const typography = {
    fontFamily: '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontSize: '2.375rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.25rem', fontWeight: 500 },
    h6: { fontSize: '1.125rem', fontWeight: 500 },
    subtitle1: { fontSize: '1rem', fontWeight: 400 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
    button: { fontSize: '0.875rem', fontWeight: 500, textTransform: 'none' },
    caption: { fontSize: '0.75rem', fontWeight: 400 },
    overline: { fontSize: '0.75rem', fontWeight: 400, textTransform: 'uppercase' }
  }

  // Color Schemes
  const colorSchemes = {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: mainColors.primary,
          light: alpha(mainColors.primary, 0.8),
          dark: alpha(mainColors.primary, 1.2),
          contrastText: white
        },
        secondary: {
          main: mainColors.secondary,
          light: alpha(mainColors.secondary, 0.8),
          dark: alpha(mainColors.secondary, 1.2),
          contrastText: white
        },
        success: {
          main: mainColors.success,
          light: alpha(mainColors.success, 0.8),
          dark: alpha(mainColors.success, 1.2),
          contrastText: white
        },
        error: {
          main: mainColors.error,
          light: alpha(mainColors.error, 0.8),
          dark: alpha(mainColors.error, 1.2),
          contrastText: white
        },
        warning: {
          main: mainColors.warning,
          light: alpha(mainColors.warning, 0.8),
          dark: alpha(mainColors.warning, 1.2),
          contrastText: black
        },
        info: {
          main: mainColors.info,
          light: alpha(mainColors.info, 0.8),
          dark: alpha(mainColors.info, 1.2),
          contrastText: white
        },
        text: {
          primary: alpha(black, 0.87),
          secondary: alpha(black, 0.6),
          disabled: alpha(black, 0.38)
        },
        divider: alpha(black, 0.12),
        background: {
          paper: skin === 'bordered' ? white : '#F4F5FA',
          default: '#F4F5FA'
        },
        action: {
          active: alpha(black, 0.54),
          hover: alpha(black, 0.04),
          selected: alpha(black, 0.08),
          disabled: alpha(black, 0.26),
          disabledBackground: alpha(black, 0.12),
          focus: alpha(black, 0.12)
        }
      },
      shadows: shadows.light
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: mainColors.primary,
          light: alpha(mainColors.primary, 0.8),
          dark: alpha(mainColors.primary, 1.2),
          contrastText: white
        },
        secondary: {
          main: mainColors.secondary,
          light: alpha(mainColors.secondary, 0.8),
          dark: alpha(mainColors.secondary, 1.2),
          contrastText: white
        },
        success: {
          main: mainColors.success,
          light: alpha(mainColors.success, 0.8),
          dark: alpha(mainColors.success, 1.2),
          contrastText: white
        },
        error: {
          main: mainColors.error,
          light: alpha(mainColors.error, 0.8),
          dark: alpha(mainColors.error, 1.2),
          contrastText: white
        },
        warning: {
          main: mainColors.warning,
          light: alpha(mainColors.warning, 0.8),
          dark: alpha(mainColors.warning, 1.2),
          contrastText: black
        },
        info: {
          main: mainColors.info,
          light: alpha(mainColors.info, 0.8),
          dark: alpha(mainColors.info, 1.2),
          contrastText: white
        },
        text: {
          primary: alpha(white, 0.87),
          secondary: alpha(white, 0.6),
          disabled: alpha(white, 0.38)
        },
        divider: alpha(white, 0.12),
        background: {
          paper: skin === 'bordered' ? '#312D4B' : '#28243D',
          default: '#28243D'
        },
        action: {
          active: alpha(white, 0.54),
          hover: alpha(white, 0.04),
          selected: alpha(white, 0.08),
          disabled: alpha(white, 0.26),
          disabledBackground: alpha(white, 0.12),
          focus: alpha(white, 0.12)
        }
      },
      shadows: shadows.dark
    }
  }

  return {
    direction,
    typography,
    ...colorSchemes[mode],
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    }
  }
}

export default theme 