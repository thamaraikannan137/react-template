const themeConfig = {
  templateName: 'React Dashboard',
  compactContentWidth: 1440,
  layoutPadding: 24,
  footer: {
    type: 'static'
  },
  navbar: {
    type: 'sticky',
    contentWidth: 'wide'
  },
  verticalNav: {
    isCollapsed: false,
    showTooltip: true,
    navWidth: 260,
    collapsedWidth: 80
  },
  mode: 'light',
  skin: 'default',
  palette: {
    primary: {
      main: '#7367F0',
      light: '#8F85F3',
      dark: '#5E50EE',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#82868B',
      light: '#9CA0A4',
      dark: '#6B6F73',
      contrastText: '#FFF'
    },
    success: {
      main: '#28C76F',
      light: '#48CE83',
      dark: '#1F9D57',
      contrastText: '#FFF'
    },
    error: {
      main: '#EA5455',
      light: '#EE6F70',
      dark: '#BB4344',
      contrastText: '#FFF'
    },
    warning: {
      main: '#FF9F43',
      light: '#FFB264',
      dark: '#CC7F36',
      contrastText: '#FFF'
    },
    info: {
      main: '#00CFE8',
      light: '#1CE7FF',
      dark: '#00A5BA',
      contrastText: '#FFF'
    }
  }
}

export default themeConfig 