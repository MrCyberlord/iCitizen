import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          pt: 8,
          pb: 6,
          mt: 8,
          width: '100%'
        }}
      >
        <Container maxWidth={false} sx={{ width: '100%' }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            Welcome to iCitizen
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            paragraph
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Your one-stop platform for seamless interaction with government services.
            Simplifying bureaucracy, one click at a time.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#ff1744',
                '&:hover': {
                  bgcolor: '#d50000'
                }
              }}
            >
              Get Started
            </Button>
            <Button variant="outlined" color="inherit">
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container 
        maxWidth={false} 
        sx={{ 
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
          width: '100%'
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <SecurityIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Secure
              </Typography>
              <Typography align="center">
                State-of-the-art security measures to protect your data
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <SpeedIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Fast
              </Typography>
              <Typography align="center">
                Quick and efficient processing of your requests
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <AccessibilityNewIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Accessible
              </Typography>
              <Typography align="center">
                User-friendly interface accessible to everyone
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage; 