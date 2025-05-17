'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'

// Icon Imports
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

// Styled Component Imports
import StyledNavbar from '@layouts/styles/vertical/StyledNavbar'

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick} size="small" color="inherit">
        <Avatar sx={{ width: 40, height: 40 }}>
          <AccountCircleIcon />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

const Navbar = () => {
  // States
  const [isScrolled, setIsScrolled] = useState(false)

  // Hooks
  const { settings, saveSettings } = useSettings()
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true
  })

  const toggleTheme = () => {
    saveSettings({ ...settings, mode: settings.mode === 'light' ? 'dark' : 'light' })
  }

  return (
    <StyledNavbar
      className={classnames(verticalLayoutClasses.navbar, {
        'navbar-scrolled': isScrolled || trigger
      })}
    >
      <AppBar position='static' elevation={0}>
        <Toolbar className='navbar-content-container'>
          <Box className='flex items-center justify-between w-full'>
            {/* Left Side */}
            <Box className='flex items-center'>
              <IconButton
                edge='start'
                color='inherit'
                onClick={() => saveSettings({ ...settings, navCollapsed: !settings.navCollapsed })}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Right Side */}
            <Box className='flex items-center gap-4'>
              <IconButton color='inherit' onClick={toggleTheme}>
                {settings.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <IconButton color='inherit'>
                <NotificationsIcon />
              </IconButton>
              <UserDropdown />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </StyledNavbar>
  )
}

export default Navbar 