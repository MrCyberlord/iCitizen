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
  LinearProgress
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TimelineIcon from '@mui/icons-material/Timeline';
import WarningIcon from '@mui/icons-material/Warning';

const OrgnizationDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Header Section */}
      <Typography variant="h4" gutterBottom>
        Organization Dashboard
      </Typography>

      {/* Stats Overview */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Applications</Typography>
            <Typography variant="h3" color="primary">156</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Pending Review</Typography>
            <Typography variant="h3" color="warning.main">23</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Processed Today</Typography>
            <Typography variant="h3" color="success.main">15</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Urgent Cases</Typography>
            <Typography variant="h3" color="error.main">4</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Performance Metrics */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Processing Performance
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Daily Target Progress
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={75} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2">75%</Typography>
                  </Box>
                </Box>
              </Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TimelineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Average Processing Time" 
                    secondary="2.3 days"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Active Staff Members" 
                    secondary="12 online"
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
                Urgent Cases
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WarningIcon color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Emergency Building Permit" 
                    secondary="Waiting for 48 hours"
                  />
                  <Button variant="contained" color="error" size="small">
                    Review Now
                  </Button>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AssignmentIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Business License Appeal" 
                    secondary="Deadline: 24 hours"
                  />
                  <Button variant="contained" color="warning" size="small">
                    Process
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

export default OrgnizationDashboard; 