/**
 * Config file for theme settings. These settings control:
 * 1. mode (light/dark/system)
 * 2. skin (default/bordered)
 * 3. layout (vertical/horizontal)
 * 4. navbar/footer settings
 * 5. content width
 * and more...
 */

const themeConfig = {
  templateName: 'sneat',
  homePageUrl: '/home',
  settingsCookieName: 'sneat-mui-react-demo-1',
  mode: 'system', // 'system', 'light', 'dark'
  skin: 'default', // 'default', 'bordered'
  semiDark: false, // true, false
  layout: 'vertical', // 'vertical', 'collapsed', 'horizontal'
  layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
  compactContentWidth: 1440, // in px
  navbar: {
    type: 'fixed', // 'fixed', 'static'
    contentWidth: 'compact', // 'compact', 'wide'
    floating: true, // true, false (This will not work in the Horizontal Layout)
    detached: true, // true, false (This will not work in the Horizontal Layout or floating navbar is enabled)
    blur: true // true, false
  },
  contentWidth: 'compact', // 'compact', 'wide'
  footer: {
    type: 'static', // 'fixed', 'static'
    contentWidth: 'compact', // 'compact', 'wide'
    detached: true // true, false (This will not work in the Horizontal Layout)
  },
  disableRipple: true // true, false
}

export default themeConfig 