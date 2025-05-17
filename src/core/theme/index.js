// Theme Options Imports
import overrides from './overrides'
import colorSchemes from './colorSchemes'
import spacing from './spacing'
import shadows from './shadows'
import customShadows from './customShadows'
import typography from './typography'

const theme = (settings, mode, direction) => {
  return {
    direction,
    components: overrides(settings.skin),
    colorSchemes: colorSchemes(settings.skin),
    ...spacing,
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    },
    shadows: shadows(mode),
    typography: typography(),
    customShadows: customShadows(mode),
    mainColorChannels: {
      light: '34 48 62',
      dark: '230 230 241',
      lightShadow: '34 48 62',
      darkShadow: '20 20 29'
    }
  }
}

export default theme 