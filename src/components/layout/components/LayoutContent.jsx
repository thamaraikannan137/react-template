// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// Third-party Imports
import classnames from 'classnames';

// Hook Imports
import { useSettings } from '../../../core/contexts/SettingsContext';

// Util Imports
import { verticalLayoutClasses } from '../utils/layoutClasses';

// Styled Component Imports
import { styled } from '@mui/material/styles';

const StyledMain = styled('main')(({ theme, isContentCompact }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: theme.transitions.create(['padding', 'margin'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  ...(isContentCompact && {
    marginInline: 'auto',
    maxInlineSize: 1440
  }),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3)
  }
}));

const LayoutContent = ({ children }) => {
  // Hooks
  const { settings } = useSettings();

  // Vars
  const contentCompact = settings.contentWidth === 'compact';
  const contentWide = settings.contentWidth === 'wide';

  return (
    <StyledMain
      isContentCompact={contentCompact}
      className={classnames(verticalLayoutClasses.content, 'flex-auto', {
        [`${verticalLayoutClasses.contentCompact} is-full`]: contentCompact,
        [verticalLayoutClasses.contentWide]: contentWide
      })}
    >
      {children}
    </StyledMain>
  );
};

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutContent; 