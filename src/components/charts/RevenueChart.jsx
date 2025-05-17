// React Imports
import { useState } from 'react';

// MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// Third-party Imports
import dynamic from 'next/dynamic';

// Dynamic Imports
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RevenueChart = () => {
  // Hooks
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '45%'
      }
    },
    stroke: {
      width: [2, 0],
      curve: 'smooth'
    },
    grid: {
      strokeDashArray: 7,
      borderColor: theme.palette.divider
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      labels: {
        colors: theme.palette.text.secondary
      }
    },
    colors: [theme.palette.primary.main, theme.palette.success.main],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const series = [
    {
      name: 'Revenue',
      type: 'line',
      data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600, 48900]
    },
    {
      name: 'Profit',
      type: 'bar',
      data: [35000, 37000, 34800, 37500, 35500, 38000, 36500, 38600, 38900]
    }
  ];

  return (
    <Box sx={{ height: 350 }}>
      <Chart options={options} series={series} type="line" height={350} />
    </Box>
  );
};

export default RevenueChart; 