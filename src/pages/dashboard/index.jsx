// React Imports
import { useState } from 'react';

// MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Component Imports
import StatisticsCard from '../../components/cards/StatisticsCard';
import RevenueChart from '../../components/charts/RevenueChart';
import SalesChart from '../../components/charts/SalesChart';
import RecentTransactions from '../../components/tables/RecentTransactions';
import ActivityTimeline from '../../components/timeline/ActivityTimeline';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      {/* Statistics Row */}
      <Grid item xs={12} md={3}>
        <StatisticsCard
          title="Total Revenue"
          stats="$45,234"
          icon="bx-dollar"
          trend="+4.2%"
          trendDir="up"
          subtitle="Weekly Profit"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <StatisticsCard
          title="Total Sales"
          stats="5,423"
          icon="bx-shopping-bag"
          trend="+2.4%"
          trendDir="up"
          subtitle="Weekly Sales"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <StatisticsCard
          title="New Users"
          stats="1,234"
          icon="bx-user-plus"
          trend="+3.1%"
          trendDir="up"
          subtitle="Weekly Users"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <StatisticsCard
          title="Active Users"
          stats="12.5k"
          icon="bx-user-check"
          trend="+2.8%"
          trendDir="up"
          subtitle="Weekly Active Users"
        />
      </Grid>

      {/* Charts Row */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader title="Revenue Overview" />
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title="Weekly Sales" />
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>
      </Grid>

      {/* Recent Transactions and Activity Timeline */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardHeader title="Recent Transactions" />
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title="Activity Timeline" />
          <CardContent>
            <ActivityTimeline />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard; 