// React Imports
import React, { useState, useRef } from 'react';

// MUI Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Icon Imports
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ComputerIcon from '@mui/icons-material/Computer';
import PaletteIcon from '@mui/icons-material/Palette';
import RefreshIcon from '@mui/icons-material/Refresh';

// Context Import
import { useThemeContext } from './ThemeContext';
import { useSettings } from '../../core/contexts/SettingsContext';

// Config Import
import primaryColorConfig from '../../core/configs/primaryColorConfig';

// Styled Components
const CustomizerButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(6),
  bottom: theme.spacing(6),
  zIndex: 1000,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(4)
  }
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.divider}`
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  '& + &': {
    borderTop: `1px solid ${theme.palette.divider}`
  }
}));

const ColorBox = styled(Box)(({ theme, color, active }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color,
  transition: 'all 0.2s ease',
  border: `2px solid ${active ? theme.palette.primary.main : theme.palette.divider}`,
  '&:hover': {
    borderColor: theme.palette.primary.main
  }
}));

const DebouncedColorPicker = ({ color, onChange }) => {
  const [debouncedColor, setDebouncedColor] = useState(color);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onChange(debouncedColor);
    }, 200);

    return () => clearTimeout(timer);
  }, [debouncedColor, onChange]);

  return (
    <Box sx={{ p: 4 }}>
      <HexColorPicker color={color} onChange={setDebouncedColor} />
      <HexColorInput
        color={color}
        onChange={setDebouncedColor}
        prefixed
        style={{
          width: '100%',
          marginTop: 16,
          padding: 8,
          border: '1px solid #ccc',
          borderRadius: 4
        }}
      />
    </Box>
  );
};

const ThemeCustomizer = () => {
  // States
  const [open, setOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  
  // Refs
  const anchorRef = useRef(null);
  
  // Hooks
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const { settings, saveSettings, resetSettings } = useSettings();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLayoutChange = (value) => {
    saveSettings({ ...settings, layout: value });
  };

  const handleContentWidthChange = (value) => {
    saveSettings({ ...settings, contentWidth: value });
  };

  const handleNavCollapsedChange = (event) => {
    saveSettings({ ...settings, navCollapsed: event.target.checked });
  };

  const handleThemeModeChange = (value) => {
    if (value === 'system') {
      saveSettings({ ...settings, themeMode: 'system' });
    } else {
      saveSettings({ ...settings, themeMode: value === 'dark' ? 'dark' : 'light' });
      toggleTheme();
    }
  };

  const handlePrimaryColorChange = (color) => {
    saveSettings({ ...settings, primaryColor: color });
    setColorPickerOpen(false);
  };

  const handleNavbarSettingChange = (value) => {
    saveSettings({ ...settings, navbarSettings: value });
  };

  const ScrollWrapper = ({ children }) => {
    return (
      <PerfectScrollbar options={{ wheelPropagation: false }}>
        {children}
      </PerfectScrollbar>
    );
  };

  return (
    <>
      <CustomizerButton onClick={handleDrawerToggle} size="large">
        <SettingsIcon />
      </CustomizerButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 320
          }
        }}
      >
        <Header>
          <Box>
            <Typography variant="h6">Theme Customizer</Typography>
            <Typography variant="body2" color="text.secondary">
              Customize & Preview in Real Time
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton onClick={resetSettings} size="small">
              <RefreshIcon />
            </IconButton>
            <IconButton onClick={handleDrawerToggle} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Header>

        <ScrollWrapper>
          <Box sx={{ height: 'calc(100% - 68px)', overflow: 'hidden' }}>
            <Section>
              <Typography variant="h6" sx={{ mb: 4 }}>
                Theme
              </Typography>
              <FormControl component="fieldset" sx={{ width: '100%' }}>
                <FormLabel component="legend">Mode</FormLabel>
                <RadioGroup 
                  value={settings.themeMode} 
                  onChange={(e) => handleThemeModeChange(e.target.value)}
                  sx={{ mb: 4 }}
                >
                  <FormControlLabel
                    value="light"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LightModeIcon />
                        <Typography>Light</Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="dark"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <DarkModeIcon />
                        <Typography>Dark</Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="system"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <ComputerIcon />
                        <Typography>System</Typography>
                      </Box>
                    }
                  />
                </RadioGroup>

                <Divider sx={{ my: 4 }} />

                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  Primary Color
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {primaryColorConfig.map((color) => (
                      <ColorBox
                        key={color}
                        color={color}
                        active={settings.primaryColor === color}
                        onClick={() => handlePrimaryColorChange(color)}
                      />
                    ))}
                    <ColorBox
                      ref={anchorRef}
                      color={settings.primaryColor}
                      active={!primaryColorConfig.includes(settings.primaryColor)}
                      onClick={() => setColorPickerOpen(!colorPickerOpen)}
                    >
                      <PaletteIcon />
                    </ColorBox>
                  </Box>
                  <Popper
                    open={colorPickerOpen}
                    anchorEl={anchorRef.current}
                    transition
                    placement="top"
                    style={{ zIndex: 1301 }}
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper
                          elevation={8}
                          sx={{
                            backgroundColor: 'background.paper',
                            boxShadow: theme.customShadows?.dialog
                          }}
                        >
                          <DebouncedColorPicker
                            color={settings.primaryColor}
                            onChange={handlePrimaryColorChange}
                          />
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </Box>
              </FormControl>
            </Section>

            <Section>
              <Typography variant="h6" sx={{ mb: 4 }}>
                Layout
              </Typography>
              <FormControl component="fieldset" sx={{ width: '100%' }}>
                <FormLabel component="legend">Content Width</FormLabel>
                <RadioGroup
                  value={settings.contentWidth}
                  onChange={(e) => handleContentWidthChange(e.target.value)}
                  sx={{ mb: 4 }}
                >
                  <FormControlLabel
                    value="full"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <ViewCompactIcon />
                        <Typography>Full Width</Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="boxed"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <ViewSidebarIcon />
                        <Typography>Boxed</Typography>
                      </Box>
                    }
                  />
                </RadioGroup>

                <FormLabel component="legend">Navigation</FormLabel>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.navCollapsed}
                      onChange={handleNavCollapsedChange}
                    />
                  }
                  label="Collapsed Navigation"
                />
              </FormControl>
            </Section>
          </Box>
        </ScrollWrapper>
      </Drawer>
    </>
  );
};

export default ThemeCustomizer; 