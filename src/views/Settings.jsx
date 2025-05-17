// React Imports
import React from 'react';

// MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';

// Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

// Context Import
import { useThemeContext } from '../components/theme/ThemeContext';

const SettingsOption = ({ icon, title, description, control }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
      {icon}
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
    {control}
  </Box>
);

const Settings = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <Box sx={{ p: 6 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1">
        Manage your application settings here.
      </Typography>
    </Box>
  );
};

export default Settings; 