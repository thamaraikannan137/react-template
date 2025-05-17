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

const DashboardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  marginTop: 64, // Height of the navbar
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4)
  }
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
    <Box sx={{ p: 6 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to your dashboard!
      </Typography>
    </Box>
  );
};

export default Dashboard; 