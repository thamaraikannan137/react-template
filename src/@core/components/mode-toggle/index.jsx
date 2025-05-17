// React Imports
import { useRef, useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const ModeToggle = () => {
  // States
  const [anchorEl, setAnchorEl] = useState(null)

  // Hooks
  const theme = useTheme()
  const { settings, updateSettings } = useSettings()

  // Handle Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // Handle Mode Change
  const handleModeChange = (mode) => {
    updateSettings({ mode })
    handleClose()
  }

  return (
    <>
      <IconButton
        color='inherit'
        onClick={handleClick}
        sx={{
          ...(settings.navbar.type === 'fixed' && {
            color: 'text.primary'
          })
        }}
      >
        {settings.mode === 'light' ? (
          <i className='bx-sun text-[24px]' />
        ) : settings.mode === 'dark' ? (
          <i className='bx-moon text-[24px]' />
        ) : (
          <i className='bx-desktop text-[24px]' />
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            width: 180,
            mt: 4
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem
          selected={settings.mode === 'light'}
          onClick={() => handleModeChange('light')}
        >
          <ListItemIcon>
            <i className='bx-sun text-[20px]' />
          </ListItemIcon>
          <ListItemText primary='Light' />
        </MenuItem>

        <MenuItem
          selected={settings.mode === 'dark'}
          onClick={() => handleModeChange('dark')}
        >
          <ListItemIcon>
            <i className='bx-moon text-[20px]' />
          </ListItemIcon>
          <ListItemText primary='Dark' />
        </MenuItem>

        <MenuItem
          selected={settings.mode === 'system'}
          onClick={() => handleModeChange('system')}
        >
          <ListItemIcon>
            <i className='bx-desktop text-[20px]' />
          </ListItemIcon>
          <ListItemText primary='System' />
        </MenuItem>
      </Menu>
    </>
  )
}

export default ModeToggle 