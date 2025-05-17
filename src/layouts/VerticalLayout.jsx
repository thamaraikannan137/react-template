// Third-party Imports
import React, { useState } from 'react';
import classnames from 'classnames';

// MUI Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Component Imports
import LayoutContent from './components/vertical/LayoutContent';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import ThemeCustomizer from '../components/theme/ThemeCustomizer';

// Context Import
import { useLayoutContext } from '../components/layout/LayoutContext';

const StyledContentWrapper = styled('div')(({ theme, layoutWidth, navStyle }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  transition: theme.transitions.create(['margin', 'max-width'], {
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('lg')]: {
    marginLeft: navStyle === 'floating' ? 260 : 0,
    maxWidth: layoutWidth === 'boxed' ? '1440px' : '100%',
    margin: layoutWidth === 'boxed' ? '0 auto' : undefined
  }
}));

const MainWrapper = styled(Box)(({ theme, layoutWidth }) => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  maxWidth: layoutWidth === 'boxed' ? '1440px' : '100%',
  margin: layoutWidth === 'boxed' ? '0 auto' : undefined,
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

const verticalLayoutClasses = {
  root: 'vertical-layout',
  contentWrapper: 'vertical-layout-content'
};

const VerticalLayout = props => {
  // Props
  const { navbar, footer, navigation, children } = props;

  // States
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Context
  const { navStyle, layoutWidth, navCollapsed } = useLayoutContext();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <MainWrapper className={classnames(verticalLayoutClasses.root)} layoutWidth={layoutWidth}>
      {navigation && React.cloneElement(navigation, { 
        open: isNavOpen, 
        onClose: () => setIsNavOpen(false),
        navStyle,
        navCollapsed
      })}
      <StyledContentWrapper
        className={classnames(verticalLayoutClasses.contentWrapper)}
        layoutWidth={layoutWidth}
        navStyle={navStyle}
      >
        {navbar && React.cloneElement(navbar, { onDrawerToggle: handleNavToggle })}
        <LayoutContent>{children}</LayoutContent>
        {footer || null}
      </StyledContentWrapper>
      <ScrollToTop />
      <ThemeCustomizer />
    </MainWrapper>
  );
};

export default VerticalLayout; 