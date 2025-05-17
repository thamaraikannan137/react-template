// React Imports
import React from 'react';

// MUI Imports
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper
}));

const IconWrapper = styled(Box)(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: 48,
  height: 48,
  backgroundColor: theme.palette[color].light,
  color: theme.palette[color].main
}));

const statsData = [
  {
    title: 'Total Sales',
    stats: '$24,567',
    color: 'primary',
    icon: <TrendingUpIcon />
  },
  {
    title: 'Visitors',
    stats: '145.8K',
    color: 'success',
    icon: <PersonOutlineIcon />
  },
  {
    title: 'Revenue',
    stats: '$48,265',
    color: 'warning',
    icon: <AttachMoneyIcon />
  },
  {
    title: 'Orders',
    stats: '2,456',
    color: 'info',
    icon: <ShoppingCartIcon />
  }
];

const Dashboard = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        {statsData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <StyledCard>
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {item.stats}
                </Typography>
              </Box>
              <IconWrapper color={item.color}>{item.icon}</IconWrapper>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Add more dashboard content here */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Recent Activity
              </Typography>
              {/* Add chart or activity list here */}
              <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="textSecondary">Chart or activity list goes here</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Statistics
              </Typography>
              {/* Add statistics or summary here */}
              <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="textSecondary">Statistics summary goes here</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 