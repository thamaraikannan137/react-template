// React Imports
import { useRef, useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import ClickAwayListener from '@mui/material/ClickAwayListener'

// Third-party Imports
import classnames from 'classnames'
import { useDebounce, useMedia } from 'react-use'
import { HexColorPicker, HexColorInput } from 'react-colorful'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Style Import
import './styles.css'

const Customizer = ({ breakpoint = 'lg', dir = 'ltr', disableDirection = false }) => {
  // States
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [colorPickerOpen, setColorPickerOpen] = useState(false)

  // Refs
  const anchorRef = useRef(null)
  const colorPickerRef = useRef(null)

  // Hooks
  const theme = useTheme()
  const { settings, updateSettings, resetSettings, isSettingsChanged } = useSettings()
  const isSystemDark = useMedia('(prefers-color-scheme: dark)', false)

  // Handle Settings Change
  const handleChange = (field, value) => {
    updateSettings({ [field]: value })
  }

  // Handle Color Change
  const handleColorChange = (color) => {
    updateSettings({ primaryColor: color })
  }

  // Debounce Color Change
  useDebounce(() => {
    if (colorPickerOpen) {
      const element = colorPickerRef.current
      if (element) {
        element.style.opacity = '1'
      }
    }
  }, 300, [colorPickerOpen])

  return (
    <div className={classnames('customizer', { open: isOpen })}>
      {/* Customizer Toggle Button */}
      <div className='customizer-toggler' onClick={() => setIsOpen(!isOpen)}>
        <IconButton color='primary'>
          <i className='bx-cog' />
        </IconButton>
      </div>

      {/* Customizer Content */}
      <div className='customizer-content'>
        {/* Header */}
        <div className='customizer-header'>
          <Typography variant='h6'>Theme Customizer</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {isSettingsChanged && (
              <IconButton size='small' onClick={resetSettings}>
                <i className='bx-reset' />
              </IconButton>
            )}
            <IconButton size='small' onClick={() => setIsOpen(false)}>
              <i className='bx-x' />
            </IconButton>
          </Box>
        </div>

        {/* Body */}
        <div className='customizer-body'>
          {/* Skin */}
          <div className='customizer-section'>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>Skin</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                onClick={() => handleChange('skin', 'default')}
                className={classnames('skin-option', { active: settings.skin === 'default' })}
              >
                <i className='bx-check' />
                <span>Default</span>
              </Box>
              <Box
                onClick={() => handleChange('skin', 'bordered')}
                className={classnames('skin-option', { active: settings.skin === 'bordered' })}
              >
                <i className='bx-check' />
                <span>Bordered</span>
              </Box>
            </Box>
          </div>

          {/* Mode */}
          <div className='customizer-section'>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>Mode</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                onClick={() => handleChange('mode', 'light')}
                className={classnames('mode-option', { active: settings.mode === 'light' })}
              >
                <i className='bx-sun' />
                <span>Light</span>
              </Box>
              <Box
                onClick={() => handleChange('mode', 'dark')}
                className={classnames('mode-option', { active: settings.mode === 'dark' })}
              >
                <i className='bx-moon' />
                <span>Dark</span>
              </Box>
              <Box
                onClick={() => handleChange('mode', 'system')}
                className={classnames('mode-option', { active: settings.mode === 'system' })}
              >
                <i className='bx-desktop' />
                <span>System</span>
              </Box>
            </Box>
          </div>

          {/* Primary Color */}
          <div className='customizer-section'>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>Primary Color</Typography>
            <Box sx={{ position: 'relative' }}>
              <Button
                ref={anchorRef}
                variant='outlined'
                onClick={() => setColorPickerOpen(true)}
                sx={{
                  width: '100%',
                  height: 40,
                  backgroundColor: settings.primaryColor,
                  '&:hover': { backgroundColor: settings.primaryColor }
                }}
              />
              <Popper
                open={colorPickerOpen}
                anchorEl={anchorRef.current}
                placement='bottom-start'
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper
                      ref={colorPickerRef}
                      sx={{
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                        p: 3,
                        mt: 1,
                        width: 240
                      }}
                    >
                      <ClickAwayListener onClickAway={() => setColorPickerOpen(false)}>
                        <div>
                          <HexColorPicker color={settings.primaryColor} onChange={handleColorChange} />
                          <Box sx={{ mt: 2 }}>
                            <HexColorInput
                              color={settings.primaryColor}
                              onChange={handleColorChange}
                              prefixed
                            />
                          </Box>
                        </div>
                      </ClickAwayListener>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Box>
          </div>

          {/* Layout */}
          <div className='customizer-section'>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>Layout</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                onClick={() => handleChange('layout', 'vertical')}
                className={classnames('layout-option', { active: settings.layout === 'vertical' })}
              >
                <i className='bx-layout' />
                <span>Vertical</span>
              </Box>
              <Box
                onClick={() => handleChange('layout', 'collapsed')}
                className={classnames('layout-option', { active: settings.layout === 'collapsed' })}
              >
                <i className='bx-menu' />
                <span>Collapsed</span>
              </Box>
              <Box
                onClick={() => handleChange('layout', 'horizontal')}
                className={classnames('layout-option', { active: settings.layout === 'horizontal' })}
              >
                <i className='bx-dock-top' />
                <span>Horizontal</span>
              </Box>
            </Box>
          </div>

          {/* Content Width */}
          <div className='customizer-section'>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>Content Width</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                onClick={() => handleChange('contentWidth', 'full')}
                className={classnames('content-width-option', { active: settings.contentWidth === 'full' })}
              >
                <i className='bx-fullscreen' />
                <span>Full</span>
              </Box>
              <Box
                onClick={() => handleChange('contentWidth', 'compact')}
                className={classnames('content-width-option', { active: settings.contentWidth === 'compact' })}
              >
                <i className='bx-dock-left' />
                <span>Compact</span>
              </Box>
            </Box>
          </div>

          {/* Navbar */}
          <div className='customizer-section'>
            <Typography variant='subtitle2' sx={{ mb: 2 }}>Navbar</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>Fixed</Typography>
                <Switch
                  checked={settings.navbar.type === 'fixed'}
                  onChange={(e) => handleChange('navbar', { ...settings.navbar, type: e.target.checked ? 'fixed' : 'static' })}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>Detached</Typography>
                <Switch
                  checked={settings.navbar.detached}
                  onChange={(e) => handleChange('navbar', { ...settings.navbar, detached: e.target.checked })}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>Blur</Typography>
                <Switch
                  checked={settings.navbar.blur}
                  onChange={(e) => handleChange('navbar', { ...settings.navbar, blur: e.target.checked })}
                />
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customizer 