// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Layout Imports
import VerticalLayout from './VerticalLayout';
import HorizontalLayout from './HorizontalLayout';
import BlankLayout from './BlankLayout';

// Hook Imports
import { useSettings } from '../../core/contexts/SettingsContext';

const LayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  ...(theme.direction === 'rtl' ? { direction: 'rtl' } : { direction: 'ltr' })
}));

const Layout = (props) => {
  // Props
  const { systemMode, verticalLayout, horizontalLayout } = props;

  // Hooks
  const { settings } = useSettings();

  const renderLayout = () => {
    const { layout } = settings;

    if (layout === 'blank') {
      return <BlankLayout>{props.children}</BlankLayout>;
    }

    if (layout === 'horizontal') {
      return <HorizontalLayout>{props.children}</HorizontalLayout>;
    }

    return <VerticalLayout>{props.children}</VerticalLayout>;
  };

  return (
    <LayoutWrapper className='flex flex-col flex-auto' data-skin={settings.skin}>
      {renderLayout()}
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout; 