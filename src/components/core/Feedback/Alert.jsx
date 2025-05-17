// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledAlert = styled(MuiAlert)(({ theme, severity, variant }) => ({
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.875rem',
  alignItems: 'flex-start',
  ...(variant === 'filled' && {
    color: theme.palette.common.white,
    backgroundColor: theme.palette[severity || 'info'].main,
    '& .MuiAlert-icon': {
      color: theme.palette.common.white
    }
  }),
  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: theme.palette[severity || 'info'].main,
    color: theme.palette[severity || 'info'].main,
    '& .MuiAlert-icon': {
      color: theme.palette[severity || 'info'].main
    }
  }),
  ...(variant === 'standard' && {
    backgroundColor: theme.palette[severity || 'info'].lighter,
    color: theme.palette[severity || 'info'].dark,
    '& .MuiAlert-icon': {
      color: theme.palette[severity || 'info'].main
    }
  })
}));

const Alert = ({
  severity = 'info',
  variant = 'standard',
  title,
  children,
  onClose,
  action,
  icon,
  ...props
}) => {
  return (
    <StyledAlert
      severity={severity}
      variant={variant}
      onClose={onClose ? () => onClose() : undefined}
      action={
        action || (onClose && (
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => onClose()}
          >
            <i className='bx-x' />
          </IconButton>
        ))
      }
      icon={icon}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </StyledAlert>
  );
};

Alert.propTypes = {
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  action: PropTypes.node,
  icon: PropTypes.node
};

export default Alert; 