// React Imports
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledTextField = styled(MuiTextField)(({ theme, size, error }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      borderColor: theme.palette.primary.main
    },
    '&.Mui-focused': {
      boxShadow: `0 0 0 2px ${theme.palette.primary.lighter}`,
      borderColor: theme.palette.primary.main
    },
    ...(error && {
      '&.Mui-focused': {
        boxShadow: `0 0 0 2px ${theme.palette.error.lighter}`
      }
    })
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: error ? theme.palette.error.main : theme.palette.primary.main
    }
  },
  ...(size === 'small' && {
    '& .MuiOutlinedInput-root': {
      padding: '6px 12px'
    }
  }),
  ...(size === 'medium' && {
    '& .MuiOutlinedInput-root': {
      padding: '8px 14px'
    }
  }),
  ...(size === 'large' && {
    '& .MuiOutlinedInput-root': {
      padding: '10px 16px'
    }
  })
}));

const TextField = forwardRef(({
  label,
  error,
  helperText,
  startAdornment,
  endAdornment,
  size = 'medium',
  fullWidth = false,
  required = false,
  disabled = false,
  multiline = false,
  rows,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  ...props
}, ref) => {
  return (
    <StyledTextField
      ref={ref}
      label={label}
      error={error}
      helperText={helperText}
      size={size}
      fullWidth={fullWidth}
      required={required}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        )
      }}
      {...props}
    />
  );
});

TextField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string
};

TextField.displayName = 'TextField';

export default TextField; 