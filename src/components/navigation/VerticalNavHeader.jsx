// React Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  minHeight: 64
}));

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
});

const Logo = styled('img')({
  maxWidth: 30,
  marginRight: 8
});

const VerticalNavHeader = ({ navHover, navCollapsed }) => {
  // If the nav is collapsed and not hovered, only show the logo
  const renderLogo = () => (
    <Logo
      src="/images/logo.png"
      alt="React Template"
    />
  );

  // If the nav is expanded or being hovered, show the full header
  const renderHeader = () => (
    <StyledLink to="/">
      {renderLogo()}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: 'text.primary',
          transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
        }}
      >
        React Template
      </Typography>
    </StyledLink>
  );

  // Show full header when nav is expanded or being hovered
  return (
    <HeaderWrapper>
      {navCollapsed && !navHover ? renderLogo() : renderHeader()}
    </HeaderWrapper>
  );
};

VerticalNavHeader.propTypes = {
  navHover: PropTypes.bool,
  navCollapsed: PropTypes.bool
};

export default VerticalNavHeader; 