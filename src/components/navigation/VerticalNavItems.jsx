// React Imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

// MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';

// Icon Imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';

const NavItem = styled(ListItemButton)(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  ...(active && {
    backgroundColor: theme.palette.primary.lighter,
    '&:hover': {
      backgroundColor: theme.palette.primary.lighter
    }
  })
}));

const NavItemText = styled(ListItemText)(({ theme, navCollapsed, navHover }) => ({
  whiteSpace: 'nowrap',
  ...(navCollapsed && !navHover && {
    display: 'none'
  })
}));

const navigationItems = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard'
  },
  {
    title: 'User Management',
    icon: <PersonIcon />,
    children: [
      {
        title: 'Users List',
        path: '/users'
      },
      {
        title: 'Roles & Permissions',
        path: '/roles'
      }
    ]
  },
  {
    title: 'Data Display',
    icon: <TableChartIcon />,
    children: [
      {
        title: 'Tables',
        path: '/tables'
      },
      {
        title: 'Charts',
        path: '/charts',
        icon: <BarChartIcon />
      }
    ]
  },
  {
    title: 'Communication',
    icon: <EmailIcon />,
    children: [
      {
        title: 'Email',
        path: '/email',
        icon: <EmailIcon />
      },
      {
        title: 'Chat',
        path: '/chat',
        icon: <ChatIcon />
      }
    ]
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings'
  }
];

const VerticalNavItems = ({ navHover, navCollapsed }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [openItems, setOpenItems] = useState({});

  const handleClick = (title) => {
    setOpenItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const renderNavItems = (items, level = 0) => {
    return items.map((item) => {
      const isActive = pathname === item.path;
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = openItems[item.title];

      const navItem = (
        <NavItem
          active={isActive ? 1 : 0}
          onClick={() => hasChildren ? handleClick(item.title) : null}
          component={!hasChildren ? Link : 'div'}
          to={!hasChildren ? item.path : undefined}
          sx={{ pl: level * 4 + 2 }}
        >
          {item.icon && (
            <ListItemIcon
              sx={{
                color: isActive ? 'primary.main' : 'text.secondary',
                minWidth: navCollapsed && !navHover ? '100%' : 40,
                justifyContent: navCollapsed && !navHover ? 'center' : 'flex-start'
              }}
            >
              {item.icon}
            </ListItemIcon>
          )}
          <NavItemText
            primary={item.title}
            navCollapsed={navCollapsed}
            navHover={navHover}
            sx={{ 
              '& .MuiTypography-root': {
                fontWeight: isActive ? 600 : 400
              }
            }}
          />
          {hasChildren && (navHover || !navCollapsed) && (
            isOpen ? <ExpandLess /> : <ExpandMore />
          )}
        </NavItem>
      );

      return (
        <ListItem
          key={item.title}
          disablePadding
          sx={{ display: 'block', mb: 0.5 }}
        >
          {navCollapsed && !navHover ? (
            <Tooltip title={item.title} placement="right">
              {navItem}
            </Tooltip>
          ) : (
            navItem
          )}
          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderNavItems(item.children, level + 1)}
              </List>
            </Collapse>
          )}
        </ListItem>
      );
    });
  };

  return (
    <List component="nav" disablePadding>
      {renderNavItems(navigationItems)}
    </List>
  );
};

VerticalNavItems.propTypes = {
  navHover: PropTypes.bool,
  navCollapsed: PropTypes.bool
};

export default VerticalNavItems; 