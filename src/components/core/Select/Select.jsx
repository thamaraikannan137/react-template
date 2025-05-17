// React Imports
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import MuiSelect from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledFormControl = styled(FormControl)(({ theme, error }) => ({
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
  }
}));

const Select = forwardRef(({
  label,
  value,
  onChange,
  options,
  error,
  helperText,
  size = 'medium',
  fullWidth = false,
  required = false,
  disabled = false,
  multiple = false,
  placeholder,
  renderValue,
  startAdornment,
  endAdornment,
  ...props
}, ref) => {
  return (
    <StyledFormControl
      error={error}
      fullWidth={fullWidth}
      size={size}
      required={required}
      disabled={disabled}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        ref={ref}
        value={value}
        onChange={onChange}
        multiple={multiple}
        displayEmpty={Boolean(placeholder)}
        renderValue={renderValue || (multiple ? (selected) => {
          if (selected.length === 0) return placeholder;
          return selected
            .map(value => options.find(option => option.value === value)?.label)
            .join(', ');
        } : (selected) => {
          if (!selected && placeholder) return placeholder;
          return options.find(option => option.value === selected)?.label;
        })}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        {...props}
      >
        {placeholder && !multiple && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <FormHelperText error={error}>
          {helperText}
        </FormHelperText>
      )}
    </StyledFormControl>
  );
});

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.node.isRequired,
      disabled: PropTypes.bool
    })
  ).isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  renderValue: PropTypes.func,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node
};

Select.displayName = 'Select';

export default Select; 