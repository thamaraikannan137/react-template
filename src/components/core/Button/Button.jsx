// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledButton = styled(MuiButton)(({ theme, size, variant, color }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 500,
  boxShadow: variant === 'contained' ? theme.customShadows.primary : 'none',
  '&:hover': {
    boxShadow: variant === 'contained' ? theme.customShadows.primaryDark : 'none',
    backgroundColor: variant === 'contained' ? theme.palette[color || 'primary'].dark : ''
  },
  ...(size === 'small' && {
    padding: '6px 16px',
    fontSize: '0.875rem'
  }),
  ...(size === 'medium' && {
    padding: '8px 20px',
    fontSize: '0.9375rem'
  }),
  ...(size === 'large' && {
    padding: '10px 24px',
    fontSize: '1rem'
  }),
  ...(variant === 'soft' && {
    backgroundColor: theme.palette[color || 'primary'].lighter,
    color: theme.palette[color || 'primary'].main,
    '&:hover': {
      backgroundColor: theme.palette[color || 'primary'].light
    }
  })
}));

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  fullWidth,
  disabled,
  loading,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant === 'soft' ? 'contained' : variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text', 'soft']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button; 