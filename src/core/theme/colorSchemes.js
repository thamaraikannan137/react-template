const colorSchemes = skin => {
  return {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#7367F0',
          light: '#8F85F3',
          dark: '#5E50EE'
        },
        secondary: {
          main: '#82868B',
          light: '#9CA0A4',
          dark: '#6B6F73'
        },
        success: {
          main: '#28C76F',
          light: '#48CE83',
          dark: '#1F9D57'
        },
        error: {
          main: '#EA5455',
          light: '#EE6B6C',
          dark: '#BB4344'
        },
        warning: {
          main: '#FF9F43',
          light: '#FFB264',
          dark: '#CC7F36'
        },
        info: {
          main: '#00CFE8',
          light: '#1CE7FF',
          dark: '#00A5BA'
        },
        background: {
          default: '#F4F5FA',
          paper: '#FFFFFF'
        }
      }
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#7367F0',
          light: '#8F85F3',
          dark: '#5E50EE'
        },
        secondary: {
          main: '#82868B',
          light: '#9CA0A4',
          dark: '#6B6F73'
        },
        background: {
          default: '#28243D',
          paper: '#312D4B'
        }
      }
    }
  }
}

export default colorSchemes 