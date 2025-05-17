// React Imports
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Collapse from '@mui/material/Collapse'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import { styled, useTheme } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Styled Components
const MenuItemTextWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: 'opacity .25s ease-in-out'
})

const NavItem = (props) => {
  // Props
  const {
    item,
    parent,
    navHover,
    navVisible,
    isSubItem,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth
  } = props

  // States
  const [open, setOpen] = useState(false)

  // Hooks
  const theme = useTheme()
  const { pathname } = useLocation()
  const { settings } = useSettings()

  // Vars
  const { navCollapsed } = settings
  const isNavCollapsed = navCollapsed && !navHover

  // Check if the item is active
  const isActive = pathname === item.path

  // Handle Item Click
  const handleItemClick = () => {
    if (item.children) {
      setOpen(!open)
    } else if (toggleNavVisibility) {
      toggleNavVisibility()
    }
  }

  const MenuItemTextMetaWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'opacity .25s ease-in-out',
    ...(isNavCollapsed && {
      opacity: 0
    })
  })

  return (
    <ListItem
      disablePadding
      className='nav-item'
      disabled={item.disabled || false}
      sx={{ mt: 1, px: '0 !important' }}
    >
      <ListItemButton
        component={item.path ? Link : 'button'}
        to={item.path}
        className={`${parent && 'nav-item-parent'} ${isActive ? 'active' : ''}`}
        onClick={handleItemClick}
        sx={{
          py: 2,
          mx: 4,
          borderRadius: 1,
          cursor: 'pointer',
          overflow: 'hidden',
          paddingLeft: isSubItem ? `${theme.spacing(9.5)} !important` : `${theme.spacing(4)} !important`,
          transition: 'padding .25s ease-in-out',
          '&.active': {
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark
            },
            '& .MuiTypography-root, & .MuiListItemIcon-root': {
              color: 'common.white'
            }
          }
        }}
      >
        <ListItemIcon
          sx={{
            transition: 'margin .25s ease-in-out',
            ...(parent && !item.icon && { display: 'none' }),
            ...(isNavCollapsed && !isSubItem && { mr: 0 }),
            ...(item.icon ? { fontSize: '1.375rem', color: 'text.primary' } : { color: 'text.primary' })
          }}
        >
          {item.icon && <i className={`bx-${item.icon}`} />}
        </ListItemIcon>

        <MenuItemTextMetaWrapper>
          <MenuItemTextWrapper>
            <Typography
              {...(isNavCollapsed && { sx: { opacity: 0 } })}
              className='menu-item-text'
            >
              {item.title}
            </Typography>
          </MenuItemTextWrapper>

          {item.badgeContent && (
            <Chip
              size='small'
              label={item.badgeContent}
              color={item.badgeColor || 'primary'}
              sx={{
                ml: 1.5,
                height: 20,
                fontWeight: 500,
                '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
              }}
            />
          )}
        </MenuItemTextMetaWrapper>

        {item.children && (
          <Box
            className='menu-item-meta'
            sx={{
              ml: 1.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.primary',
              transition: 'transform .25s ease-in-out',
              ...(open && { transform: 'rotate(90deg)' })
            }}
          >
            <i className='bx-chevron-right' />
          </Box>
        )}
      </ListItemButton>

      {item.children && (
        <Collapse
          in={open}
          timeout='auto'
          unmountOnExit
          className='menu-item-children'
          sx={{
            pl: 3.5,
            transition: 'all 0.25s ease-in-out',
            ...(parent && { pl: 0 })
          }}
        >
          {item.children.map((child, index) => (
            <NavItem
              key={index}
              item={child}
              isSubItem
              navHover={navHover}
              navVisible={navVisible}
              toggleNavVisibility={toggleNavVisibility}
              navigationBorderWidth={navigationBorderWidth}
              collapsedNavWidth={collapsedNavWidth}
            />
          ))}
        </Collapse>
      )}
    </ListItem>
  )
}

export default NavItem 