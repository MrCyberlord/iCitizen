import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './components/layout/LandingPage';
import CitizenDashboard from './components/citizen/CitizenDashboard';
import  OrganizationDashboard  from './components/organization/OrgnizationDashboard';
import SuperAdminDashboard from './components/superAdmin/SuperAdminDashboard';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/citizen" element={<CitizenDashboard />} />
                <Route path="/organization" element={<OrganizationDashboard />} />
                <Route path="/superAdmin" element={<SuperAdminDashboard />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App; 