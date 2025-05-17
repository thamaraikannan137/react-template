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
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PushPinIcon from '@mui/icons-material/PushPin';

// Hook Imports
import useNavigation from '../../../hooks/useNavigation';
import { useLayoutContext } from '../../../components/layout/LayoutContext';

const drawerWidth = 260;
const collapsedWidth = 85;

const StyledDrawer = styled(Drawer)(({ theme, navStyle }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    transition: theme.transitions.create(['width', 'box-shadow'], {
      duration: theme.transitions.duration.shorter
    }),
    boxShadow: navStyle === 'floating' ? theme.shadows[4] : 'none',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
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
  const {
    isCollapsed,
    isHovered,
    isBreakpointReached,
    isPinned,
    toggleCollapse,
    togglePin,
    handleMouseEnter,
    handleMouseLeave
  } = useNavigation();

  const { navStyle } = useLayoutContext();

  const handleNavigation = (path) => {
    navigate(path);
    if (isBreakpointReached) {
      onClose();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const effectiveWidth = isCollapsed && !isHovered ? collapsedWidth : drawerWidth;

  const drawer = (
    <Box 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box sx={{ 
        p: 6, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        minHeight: 64
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'primary.main', 
            fontWeight: 600,
            opacity: isCollapsed && !isHovered ? 0 : 1,
            transition: theme => theme.transitions.create('opacity')
          }}
        >
          React Dashboard
        </Typography>
        {!isBreakpointReached && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={togglePin} sx={{ color: isPinned ? 'primary.main' : 'text.secondary' }}>
              <PushPinIcon sx={{ transform: isPinned ? 'none' : 'rotate(45deg)' }} />
            </IconButton>
            <IconButton onClick={toggleCollapse}>
              {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
        )}
      </Box>
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <List component="nav" sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  py: 2.5,
                  px: 4,
                  borderRadius: 1,
                  minHeight: 48,
                  justifyContent: isCollapsed && !isHovered ? 'center' : 'flex-start',
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
                    minWidth: isCollapsed && !isHovered ? 0 : 38,
                    mr: isCollapsed && !isHovered ? 0 : 3,
                    justifyContent: 'center',
                    color: location.pathname === item.path ? 'primary.main' : 'text.secondary'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    opacity: isCollapsed && !isHovered ? 0 : 1,
                    transition: theme => theme.transitions.create('opacity')
                  }}
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
              minHeight: 48,
              justifyContent: isCollapsed && !isHovered ? 'center' : 'flex-start',
              color: 'error.main',
              '&:hover': {
                backgroundColor: theme => theme.palette.error.main + '14'
              }
            }}
            onClick={handleLogout}
          >
            <ListItemIcon 
              sx={{ 
                minWidth: isCollapsed && !isHovered ? 0 : 38,
                mr: isCollapsed && !isHovered ? 0 : 3,
                justifyContent: 'center',
                color: 'error.main'
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={{
                opacity: isCollapsed && !isHovered ? 0 : 1,
                transition: theme => theme.transitions.create('opacity')
              }}
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
          width: effectiveWidth,
          transition: theme.transitions.create('width')
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
        variant={navStyle === 'floating' ? 'permanent' : 'persistent'}
        navStyle={navStyle}
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            width: effectiveWidth,
            transform: 'none',
            visibility: 'visible'
          }
        }}
      >
        {drawer}
      </StyledDrawer>
    </Box>
  );
};

export default Navigation; 