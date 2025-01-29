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
  Button
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CitizenDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Welcome Section */}
      <Typography variant="h4" gutterBottom>
        Welcome, John Doe
      </Typography>

      {/* Stats Overview */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Pending Forms</Typography>
            <Typography variant="h3" color="primary">3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Completed Forms</Typography>
            <Typography variant="h3" color="success.main">12</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Notifications</Typography>
            <Typography variant="h3" color="warning.main">5</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Active Services</Typography>
            <Typography variant="h3" color="info.main">2</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activities and Forms */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DescriptionIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Building Permit Application" 
                    secondary="Submitted on 12 May 2024"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotificationsIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Document Verification Required" 
                    secondary="14 May 2024"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Business License Approved" 
                    secondary="10 May 2024"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending Forms
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PendingActionsIcon color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Vehicle Registration Renewal" 
                    secondary="Due by 20 May 2024"
                  />
                  <Button variant="contained" size="small">Complete</Button>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PendingActionsIcon color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Annual Tax Declaration" 
                    secondary="Due by 25 May 2024"
                  />
                  <Button variant="contained" size="small">Complete</Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CitizenDashboard; 