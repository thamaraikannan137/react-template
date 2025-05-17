// React Imports
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledFormControl = styled(FormControl)(({ theme, error }) => ({
  '& .MuiCheckbox-root': {
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
  }
}));

const Checkbox = forwardRef(({
  label,
  checked,
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  indeterminate = false,
  size = 'medium',
  color = 'primary',
  labelPlacement = 'end',
  sx,
  ...props
}, ref) => {
  const checkbox = (
    <MuiCheckbox
      ref={ref}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      required={required}
      indeterminate={indeterminate}
      size={size}
      color={color}
      {...props}
    />
  );

  if (!label) {
    return checkbox;
  }

  return (
    <StyledFormControl error={error} sx={sx}>
      <FormGroup>
        <FormControlLabel
          control={checkbox}
          label={label}
          labelPlacement={labelPlacement}
          disabled={disabled}
        />
      </FormGroup>
      {helperText && (
        <FormHelperText error={error}>
          {helperText}
        </FormHelperText>
      )}
    </StyledFormControl>
  );
});

Checkbox.propTypes = {
  label: PropTypes.node,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default']),
  labelPlacement: PropTypes.oneOf(['top', 'start', 'bottom', 'end']),
  sx: PropTypes.object
};

Checkbox.displayName = 'Checkbox';

export default Checkbox; 