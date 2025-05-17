// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const BlankLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  ...(theme.direction === 'rtl' ? { direction: 'rtl' } : { direction: 'ltr' })
}));

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4)
  }
}));

const BlankLayout = ({ children }) => {
  return (
    <BlankLayoutWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </BlankLayoutWrapper>
  );
};

BlankLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlankLayout; 