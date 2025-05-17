// React Imports
import { useLocation, Link } from 'react-router-dom'

// MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'

// Icon Imports
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useSettings } from '../../../@core/hooks/useSettings'

const navigation = [
  {
    title: 'Dashboards',
    icon: DashboardIcon,
    path: '/',
    children: [
      {
        title: 'Analytics',
        path: '/'
      },
      {
        title: 'CRM',
        path: '/dashboards/crm'
      }
    ]
  },
  {
    title: 'Account Settings',
    icon: AccountCircleIcon,
    path: '/account-settings'
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    path: '/settings'
  }
]

const VerticalNavItems = () => {
  // Hooks
  const { pathname } = useLocation()
  const { settings } = useSettings()

  const renderNavItems = (items, level = 0) => {
    return items.map((item, index) => {
      const IconTag = item.icon || HomeIcon

      const isActive = pathname === item.path

      return (
        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            to={item.path}
            className={classnames('nav-link', {
              'nav-link-active': isActive
            })}
            sx={{
              minHeight: 48,
              px: level ? `${level * 3 + 3}px` : 3,
              py: 1.5
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 32,
                color: isActive ? 'primary.main' : 'text.secondary'
              }}
            >
              <IconTag />
            </ListItemIcon>
            <Typography
              variant="body2"
              sx={{
                color: isActive ? 'primary.main' : 'text.secondary',
                fontWeight: isActive ? 600 : 400
              }}
            >
              {item.title}
            </Typography>
          </ListItemButton>
          {item.children && (
            <List component="div" disablePadding>
              {renderNavItems(item.children, level + 1)}
            </List>
          )}
        </ListItem>
      )
    })
  }

  return <List component="nav">{renderNavItems(navigation)}</List>
}

export default VerticalNavItems 