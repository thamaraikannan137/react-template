import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

// Layout Imports
import VerticalLayout from './layouts/VerticalLayout';
import Navigation from './layouts/components/vertical/Navigation';
import Navbar from './layouts/components/vertical/Navbar';

// View Imports
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import NotFound from './views/NotFound';

// Theme Config Import
import themeConfig from './core/theme';

// Create a theme instance
const theme = createTheme(themeConfig({
  skin: 'default',
  mode: 'light',
  direction: 'ltr'
}));

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  // Add your authentication logic here
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/404" element={<NotFound />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <VerticalLayout
                    navbar={<Navbar />}
                    navigation={<Navigation />}
                  >
                    <Dashboard />
                  </VerticalLayout>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
