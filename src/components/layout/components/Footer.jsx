// React Imports
import React from 'react';

// MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
    flexDirection: 'column',
    gap: theme.spacing(2),
    textAlign: 'center'
  }
}));

const Footer = () => {
  return (
    <FooterWrapper component="footer">
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()}{' '}
        <Link href="/" color="inherit" underline="hover">
          React Template
        </Link>
        . All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Link href="#" color="text.secondary" underline="hover">
          Privacy Policy
        </Link>
        <Link href="#" color="text.secondary" underline="hover">
          Terms of Service
        </Link>
        <Link href="#" color="text.secondary" underline="hover">
          Contact Us
        </Link>
      </Box>
    </FooterWrapper>
  );
};

export default Footer; 