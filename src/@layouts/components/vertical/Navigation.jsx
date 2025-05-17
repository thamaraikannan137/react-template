// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useSettings } from '../../../@core/hooks/useSettings'

// Config Imports
import themeConfig from '../../../configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '../../utils/layoutClasses'

// Component Imports
import VerticalNavItems from './VerticalNavItems'

// Styled Component Imports
import StyledVerticalNavigation from '../../styles/vertical/StyledVerticalNavigation'

const Navigation = () => {
  // States
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  // Hooks
  const theme = useTheme()
  const { settings, saveSettings } = useSettings()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  // Vars
  const { navCollapsed } = settings
  const { navWidth = 260, collapsedWidth = 80 } = themeConfig?.verticalNav || {}

  const navigationWidth = navCollapsed ? collapsedWidth : navWidth

  const handleNavCollapse = () => {
    saveSettings({ ...settings, navCollapsed: !navCollapsed })
  }

  useEffect(() => {
    if (isMobile) {
      setIsMobileNavVisible(false)
      saveSettings({ ...settings, navCollapsed: true })
    }
  }, [isMobile])

  const navigationComponent = (
    <StyledVerticalNavigation
      className={classnames(verticalLayoutClasses.nav, {
        'nav-hovered': isHovered,
        'nav-collapsed': navCollapsed,
        'nav-visible': isMobileNavVisible
      })}
      width={navigationWidth}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <Box className="nav-header">
        {/* Logo and Brand Text */}
        <Box className='flex items-center justify-between px-6 py-3'>
          <Typography
            variant='h6'
            sx={{
              opacity: (navCollapsed && !isHovered) ? 0 : 1,
              transition: 'opacity 0.25s ease-in-out'
            }}
          >
            {themeConfig.templateName}
          </Typography>
          <IconButton onClick={handleNavCollapse}>
            {navCollapsed ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      </Box>

      {/* Nav Items */}
      <Box
        className="nav-content"
        sx={{
          '& .MuiTypography-root': {
            opacity: (navCollapsed && !isHovered) ? 0 : 1,
            transition: 'opacity 0.25s ease-in-out'
          }
        }}
      >
        <VerticalNavItems />
      </Box>
    </StyledVerticalNavigation>
  )

  return isMobile ? (
    <Drawer
      anchor="left"
      open={isMobileNavVisible}
      onClose={() => setIsMobileNavVisible(false)}
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          width: navigationWidth
        }
      }}
    >
      {navigationComponent}
    </Drawer>
  ) : (
    navigationComponent
  )
}

export default Navigation 