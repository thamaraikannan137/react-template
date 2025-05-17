// React Imports
import { useState } from 'react';

// MUI Imports
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// Third-party Imports
import dynamic from 'next/dynamic';

// Dynamic Imports
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesChart = () => {
  // Hooks
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '65%'
        },
        track: {
          background: theme.palette.divider
        },
        dataLabels: {
          name: {
            fontSize: '14px',
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fontFamily
          },
          value: {
            fontSize: '24px',
            fontWeight: 500,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }
        }
      }
    },
    colors: [theme.palette.primary.main],
    stroke: {
      lineCap: 'round'
    },
    labels: ['Weekly Sales']
  };

  const series = [68];

  return (
    <Box sx={{ height: 350 }}>
      <Chart options={options} series={series} type="radialBar" height={350} />
    </Box>
  );
};

export default SalesChart; 