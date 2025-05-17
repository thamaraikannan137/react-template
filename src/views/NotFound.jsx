// React Imports
import React from 'react';
import { Link } from 'react-router-dom';

// MUI Imports
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <Box className='flex items-center flex-col text-center justify-center min-h-screen p-6'>
      <Box className='flex flex-col gap-2 w-[90vw] sm:w-auto mb-6'>
        <Typography variant='h1' className='text-8xl'>
          404
        </Typography>
        <Typography variant='h4'>Page Not Found ⚠️</Typography>
        <Typography>We couldn't find the page you are looking for.</Typography>
      </Box>
      <Button
        component={Link}
        to='/'
        variant='contained'
      >
        Back To Home
      </Button>
      <img
        alt='error-404-illustration'
        src='/images/illustrations/404.png'
        className='object-cover h-[327px] sm:h-[400px] md:h-[450px] lg:h-[500px] mt-6'
      />
    </Box>
  );
};

export default NotFound; 