// React Imports
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Component Imports
import VerticalNavItems from './VerticalNavItems';
import VerticalNavHeader from './VerticalNavHeader';

// Hook Imports
import { useSettings } from '../../core/contexts/SettingsContext';

// Util Imports
import { verticalLayoutClasses } from '../layout/utils/layoutClasses';

const DRAWER_WIDTH = 260;
const COLLAPSED_WIDTH = 80;

const NavDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down('lg')]: {
      position: 'fixed'
    },
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    overflowX: 'hidden'
  }
}));

const CollapsedNavDrawer = styled(Drawer)(({ theme }) => ({
  width: COLLAPSED_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: COLLAPSED_WIDTH,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down('lg')]: {
      position: 'fixed'
    },
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    overflowX: 'hidden',
    '&:hover': {
      width: DRAWER_WIDTH
    }
  }
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

const Navigation = () => {
  // States
  const [navHover, setNavHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hooks
  const theme = useTheme();
  const { pathname } = useLocation();
  const { settings, saveSettings } = useSettings();
  const { navCollapsed } = settings;
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  // Effects
  useEffect(() => {
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [pathname, isMobile]);

  // Handlers
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavHover = () => {
    if (navCollapsed) {
      setNavHover(true);
    }
  };

  const handleNavHoverEnd = () => {
    if (navCollapsed) {
      setNavHover(false);
    }
  };

  const handleNavCollapse = () => {
    if (!isMobile) {
      saveSettings({ ...settings, navCollapsed: !navCollapsed });
    }
  };

  const drawerContent = (
    <>
      <DrawerHeader>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
        <IconButton onClick={isMobile ? handleDrawerToggle : handleNavCollapse}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        className={verticalLayoutClasses.navbarContent}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut
          })
        }}
      >
        <VerticalNavItems />
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      className={verticalLayoutClasses.navbar}
      sx={{
        flexShrink: 0,
        width: {
          lg: navCollapsed && !navHover ? COLLAPSED_WIDTH : DRAWER_WIDTH
        }
      }}
    >
      {/* Mobile Navigation */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH
          }
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Navigation */}
      {navCollapsed ? (
        <CollapsedNavDrawer
          variant="permanent"
          onMouseEnter={handleNavHover}
          onMouseLeave={handleNavHoverEnd}
          open={navHover}
          sx={{
            display: { xs: 'none', lg: 'block' }
          }}
        >
          {drawerContent}
        </CollapsedNavDrawer>
      ) : (
        <NavDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', lg: 'block' }
          }}
        >
          {drawerContent}
        </NavDrawer>
      )}

      {/* Mobile Toggle Button */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            left: 0,
            top: 0,
            margin: 2,
            display: { lg: 'none' }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Navigation; 