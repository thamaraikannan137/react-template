// React Imports
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

// Icon Imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
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

const HorizontalNavigation = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorEl, setAnchorEl] = useState({});

  const handleClick = (event, title) => {
    setAnchorEl(prev => ({
      ...prev,
      [title]: event.currentTarget
    }));
  };

  const handleClose = (title) => {
    setAnchorEl(prev => ({
      ...prev,
      [title]: null
    }));
  };

  const renderNavItems = () => {
    return navigationItems.map((item) => {
      const isActive = pathname === item.path;
      const hasChildren = item.children && item.children.length > 0;

      if (!hasChildren) {
        return (
          <NavButton
            key={item.title}
            component={Link}
            to={item.path}
            active={isActive ? 1 : 0}
            startIcon={item.icon}
          >
            {item.title}
          </NavButton>
        );
      }

      return (
        <Box key={item.title}>
          <NavButton
            onClick={(e) => handleClick(e, item.title)}
            endIcon={<ExpandMoreIcon />}
            startIcon={item.icon}
          >
            {item.title}
          </NavButton>
          <Menu
            anchorEl={anchorEl[item.title]}
            open={Boolean(anchorEl[item.title])}
            onClose={() => handleClose(item.title)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
          >
            {item.children.map((child) => (
              <MenuItem
                key={child.title}
                component={Link}
                to={child.path}
                onClick={() => handleClose(item.title)}
                selected={pathname === child.path}
              >
                {child.icon && (
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {child.icon}
                  </ListItemIcon>
                )}
                <ListItemText>{child.title}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    });
  };

  if (isMobile) {
    return null;
  }

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {renderNavItems()}
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalNavigation; 