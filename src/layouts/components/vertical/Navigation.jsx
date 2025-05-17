// React Imports
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 260;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create(['box-shadow', 'width'], {
      duration: theme.transitions.duration.shorter
    }),
    boxShadow: theme.shadows[4],
    overflowX: 'hidden',
    [theme.breakpoints.down('lg')]: {
      position: 'fixed'
    }
  }
}));

const menuItems = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/'
  },
  {
    title: 'User Profile',
    icon: <PersonIcon />,
    path: '/profile'
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings'
  }
];

const Navigation = ({ open, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 6 }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
          React Dashboard
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <List component="nav" sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  py: 2.5,
                  px: 4,
                  borderRadius: 1,
                  '&.active': {
                    backgroundColor: theme.palette.primary.main + '14',
                    '& .MuiListItemIcon-root, & .MuiTypography-root': {
                      color: 'primary.main'
                    }
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    borderRadius: 1
                  }
                }}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemIcon 
                  sx={{ 
                    minWidth: 38,
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    noWrap: true,
                    fontSize: '0.875rem',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <List sx={{ px: 2, pb: 4 }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              py: 2.5,
              px: 4,
              borderRadius: 1,
              color: 'error.main',
              '&:hover': {
                backgroundColor: theme => theme.palette.error.main + '14'
              }
            }}
            onClick={handleLogout}
          >
            <ListItemIcon sx={{ minWidth: 38, color: 'error.main' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                noWrap: true,
                fontSize: '0.875rem',
                fontWeight: 500
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: 0,
        [theme.breakpoints.up('lg')]: {
          width: drawerWidth
        }
      }}
    >
      {/* Mobile navigation drawer */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: 'background.paper',
            boxShadow: theme => theme.shadows[4]
          }
        }}
      >
        {drawer}
      </Drawer>
      {/* Desktop navigation drawer */}
      <StyledDrawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block' }
        }}
      >
        {drawer}
      </StyledDrawer>
    </Box>
  );
};

export default Navigation; 