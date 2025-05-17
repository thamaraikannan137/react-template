// React Imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledTabs = styled(MuiTabs)(({ theme, variant }) => ({
  minHeight: 40,
  borderRadius: variant === 'contained' ? theme.shape.borderRadius : 0,
  ...(variant === 'contained' && {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0.5),
    '& .MuiTabs-indicator': {
      height: '100%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.primary.main,
      zIndex: 0
    }
  }),
  ...(variant === 'outlined' && {
    '& .MuiTabs-indicator': {
      height: 3,
      borderRadius: '3px 3px 0 0',
      backgroundColor: theme.palette.primary.main
    }
  }),
  ...(variant === 'text' && {
    '& .MuiTabs-indicator': {
      height: 2,
      backgroundColor: theme.palette.primary.main
    }
  })
}));

const StyledTab = styled(MuiTab)(({ theme, variant }) => ({
  minHeight: 40,
  padding: theme.spacing(1.5, 3),
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  zIndex: 1,
  '&.Mui-selected': {
    color: variant === 'contained' ? theme.palette.common.white : theme.palette.primary.main
  },
  ...(variant === 'outlined' && {
    border: `1px solid ${theme.palette.divider}`,
    borderBottom: 'none',
    marginRight: 4,
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    '&.Mui-selected': {
      backgroundColor: theme.palette.background.paper
    }
  })
}));

const TabPanel = ({ children, value, index, ...props }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...props}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Tabs = ({
  tabs,
  variant = 'text',
  value: controlledValue,
  onChange: controlledOnChange,
  defaultValue = 0,
  centered = false,
  scrollButtons = 'auto',
  orientation = 'horizontal',
  sx,
  ...props
}) => {
  // State for uncontrolled component
  const [internalValue, setInternalValue] = useState(defaultValue);

  // Determine if component is controlled
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  // Handle tab change
  const handleChange = (event, newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    controlledOnChange?.(event, newValue);
  };

  return (
    <Box sx={sx}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        scrollButtons={scrollButtons}
        centered={centered && scrollButtons === false}
        orientation={orientation}
        variant={variant}
        {...props}
      >
        {tabs.map((tab, index) => (
          <StyledTab
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition={tab.iconPosition}
            disabled={tab.disabled}
            variant={variant}
          />
        ))}
      </StyledTabs>

      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
      icon: PropTypes.node,
      iconPosition: PropTypes.oneOf(['top', 'bottom', 'start', 'end']),
      disabled: PropTypes.bool
    })
  ).isRequired,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  value: PropTypes.number,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
  centered: PropTypes.bool,
  scrollButtons: PropTypes.oneOf(['auto', true, false]),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  sx: PropTypes.object
};

export default Tabs; 