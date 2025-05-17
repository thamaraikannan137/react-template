// Third-party Imports
import React, { useState } from 'react';
import classnames from 'classnames';

// MUI Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Component Imports
import LayoutContent from './components/vertical/LayoutContent';

const StyledContentWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    marginLeft: 260 // drawer width
  }
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

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Box className={classnames(verticalLayoutClasses.root)}>
      {navigation && React.cloneElement(navigation, { open: isNavOpen, onClose: () => setIsNavOpen(false) })}
      <StyledContentWrapper
        className={classnames(verticalLayoutClasses.contentWrapper)}
      >
        {navbar && React.cloneElement(navbar, { onDrawerToggle: handleNavToggle })}
        <LayoutContent>{children}</LayoutContent>
        {footer || null}
      </StyledContentWrapper>
    </Box>
  );
};

export default VerticalLayout; 