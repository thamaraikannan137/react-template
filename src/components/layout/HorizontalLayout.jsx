// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Hook Imports
import { useSettings } from '../../core/contexts/SettingsContext';

// Component Imports
import HorizontalNavigation from '../navigation/HorizontalNavigation';
import Header from './components/Header';
import Footer from './components/Footer';

const HorizontalLayoutWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  ...(theme.direction === 'rtl' ? { direction: 'rtl' } : { direction: 'ltr' })
}));

const MainContentWrapper = styled(Box)(({ theme, contentWidth }) => ({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  ...(contentWidth === 'boxed' && {
    maxWidth: theme.breakpoints.values.lg,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg - theme.spacing(8)
    }
  })
}));

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4)
  }
}));

const HorizontalLayout = ({ children }) => {
  const { settings } = useSettings();
  const { contentWidth } = settings;

  return (
    <HorizontalLayoutWrapper>
      <Header />
      <HorizontalNavigation />
      <MainContentWrapper contentWidth={contentWidth}>
        <ContentWrapper>
          {children}
        </ContentWrapper>
        <Footer />
      </MainContentWrapper>
    </HorizontalLayoutWrapper>
  );
};

HorizontalLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default HorizontalLayout; 