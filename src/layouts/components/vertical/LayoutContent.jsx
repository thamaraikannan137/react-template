// React Imports
import React from 'react';

// MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4)
  },
  '& > *:first-of-type': {
    paddingTop: theme.spacing(8)
  }
}));

const LayoutContent = props => {
  const { children } = props;

  return (
    <StyledContent className="layout-content">
      {children}
    </StyledContent>
  );
};

export default LayoutContent; 