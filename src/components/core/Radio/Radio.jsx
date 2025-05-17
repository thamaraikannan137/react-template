// React Imports
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledFormControl = styled(FormControl)(({ theme, error }) => ({
  '& .MuiRadio-root': {
    color: error ? theme.palette.error.main : theme.palette.text.secondary,
    '&.Mui-checked': {
      color: error ? theme.palette.error.main : theme.palette.primary.main
    },
    '&:hover': {
      backgroundColor: error
        ? theme.palette.error.lighter
        : theme.palette.primary.lighter
    }
  },
  '& .MuiFormControlLabel-label': {
    color: error ? theme.palette.error.main : theme.palette.text.primary
  },
  '& .MuiFormLabel-root': {
    color: error ? theme.palette.error.main : theme.palette.text.primary,
    '&.Mui-focused': {
      color: error ? theme.palette.error.main : theme.palette.primary.main
    }
  }
}));

const Radio = forwardRef(({
  options,
  value,
  onChange,
  label,
  name,
  error,
  helperText,
  row = false,
  size = 'medium',
  color = 'primary',
  disabled = false,
  required = false,
  sx,
  ...props
}, ref) => {
  const isOptionObject = options?.length && typeof options[0] === 'object';

  return (
    <StyledFormControl error={error} required={required} sx={sx}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        row={row}
        {...props}
      >
        {options?.map((option, index) => (
          <FormControlLabel
            key={isOptionObject ? option.value : option}
            value={isOptionObject ? option.value : option}
            control={
              <MuiRadio
                size={size}
                color={color}
                disabled={disabled || option.disabled}
              />
            }
            label={isOptionObject ? option.label : option}
            disabled={disabled || option.disabled}
          />
        ))}
      </RadioGroup>
      {helperText && (
        <FormHelperText error={error}>
          {helperText}
        </FormHelperText>
      )}
    </StyledFormControl>
  );
});

Radio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.any.isRequired,
        disabled: PropTypes.bool
      })
    ])
  ).isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.node,
  name: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  row: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default']),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  sx: PropTypes.object
};

Radio.displayName = 'Radio';

export default Radio; 