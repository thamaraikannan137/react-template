// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// Third-party Imports
import classnames from 'classnames';

// Component Imports
import Navigation from '../navigation/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import LayoutContent from './components/LayoutContent';

// Util Imports
import { verticalLayoutClasses } from './utils/layoutClasses';

// Styled Component Imports
import { styled } from '@mui/material/styles';

const StyledContentWrapper = styled('div')(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  transition: theme.transitions.create(['margin', 'padding'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  [theme.breakpoints.up('lg')]: {
    marginLeft: 260
  }
}));

const VerticalLayout = (props) => {
  // Props
  const { navbar, footer, navigation, children } = props;

  return (
    <div className={classnames(verticalLayoutClasses.root, 'flex flex-auto')}>
      {navigation || <Navigation />}
      <StyledContentWrapper
        className={classnames(verticalLayoutClasses.contentWrapper, 'flex flex-col min-is-0 is-full')}
      >
        {navbar || <Header />}
        <LayoutContent>{children}</LayoutContent>
        {footer || <Footer />}
      </StyledContentWrapper>
    </div>
  );
};

VerticalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navbar: PropTypes.node,
  footer: PropTypes.node,
  navigation: PropTypes.node
};

export default VerticalLayout; 