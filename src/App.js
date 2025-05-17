import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

// Layout Imports
import LayoutWrapper from './@layouts/LayoutWrapper';
import VerticalLayout from './@layouts/VerticalLayout';
import HorizontalLayout from './@layouts/HorizontalLayout';

// Component Imports
import Navigation from './@layouts/components/vertical/Navigation';
import Navbar from './@layouts/components/vertical/Navbar';
import Footer from './@layouts/components/vertical/Footer';

// View Imports
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';
import Login from './views/Login';
import NotFound from './views/NotFound';

// Theme Import
import { ThemeContextProvider } from './components/theme/ThemeContext';
import { SettingsProvider } from './@core/hooks/useSettings';
import ThemeProvider from './@core/theme/ThemeProvider';

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
        <SettingsProvider>
          <ThemeProvider>
            <ThemeContextProvider>
              <CssBaseline />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/404" element={<NotFound />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <LayoutWrapper
                        systemMode="light"
                        verticalLayout={
                          <VerticalLayout
                            navigation={<Navigation />}
                            navbar={<Navbar />}
                            footer={<Footer />}
                          >
                            <Dashboard />
                          </VerticalLayout>
                        }
                        horizontalLayout={
                          <HorizontalLayout>
                            <div>Dashboard Content</div>
                          </HorizontalLayout>
                        }
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <LayoutWrapper
                        systemMode="light"
                        verticalLayout={
                          <VerticalLayout
                            navigation={<Navigation />}
                            navbar={<Navbar />}
                            footer={<Footer />}
                          >
                            <Settings />
                          </VerticalLayout>
                        }
                        horizontalLayout={
                          <HorizontalLayout>
                            <div>Dashboard Content</div>
                          </HorizontalLayout>
                        }
                      />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </ThemeContextProvider>
          </ThemeProvider>
        </SettingsProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
