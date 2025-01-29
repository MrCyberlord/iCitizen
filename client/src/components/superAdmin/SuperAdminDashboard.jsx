import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider
} from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import BarChartIcon from '@mui/icons-material/BarChart';
import ErrorIcon from '@mui/icons-material/Error';

const SuperAdminDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Super Admin Control Panel
      </Typography>

      {/* System Overview */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Organizations</Typography>
            <Typography variant="h3" color="primary">45</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="h3" color="success.main">2.3k</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">System Alerts</Typography>
            <Typography variant="h3" color="error.main">3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Server Load</Typography>
            <Typography variant="h3" color="info.main">42%</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Admin Controls */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Administration
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AdminPanelSettingsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User Management" 
                    secondary="Manage system users and permissions"
                  />
                  <Button variant="contained" size="small">Manage</Button>
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem>
                  <ListItemIcon>
                    <BusinessIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Organization Management" 
                    secondary="Configure organization settings"
                  />
                  <Button variant="contained" size="small">Configure</Button>
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem>
                  <ListItemIcon>
                    <SecurityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Security Settings" 
                    secondary="System security configuration"
                  />
                  <Button variant="contained" size="small">Settings</Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Monitoring
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ErrorIcon color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Critical System Alerts" 
                    secondary="3 new alerts require attention"
                  />
                  <Button variant="contained" color="error" size="small">
                    View Alerts
                  </Button>
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem>
                  <ListItemIcon>
                    <BarChartIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="System Analytics" 
                    secondary="View detailed system performance metrics"
                  />
                  <Button variant="contained" size="small">
                    View Stats
                  </Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuperAdminDashboard; 