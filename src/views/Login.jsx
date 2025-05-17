// React Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI Imports
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

// Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused': {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}1f`
    }
  }
}));

const Login = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClickShowPassword = () => setIsPasswordShown(show => !show);

  return (
    <Box className='flex min-h-screen'>
      <Box
        className='flex items-center justify-center flex-1 min-h-screen relative p-6 hidden md:flex'
        sx={{
          borderRight: theme => theme.palette.divider
        }}
      >
        <LoginIllustration
          src='/images/illustrations/login.png'
          alt='login-illustration'
          className={theme.direction === 'rtl' ? 'scale-x-[-1]' : ''}
        />
      </Box>
      <Box className='flex justify-center items-center min-h-screen bg-background-paper w-full p-6 md:w-[480px]'>
        <Box className='absolute top-6 left-6'>
          <Typography variant='h4' color='primary'>LOGO</Typography>
        </Box>
        <Box className='w-full max-w-[400px] mt-11 md:mt-0'>
          <Box className='mb-6'>
            <Typography variant='h4'>Welcome! 👋🏻</Typography>
            <Typography>Please sign-in to your account and start the adventure</Typography>
          </Box>
          <form
            noValidate
            autoComplete='off'
            onSubmit={e => {
              e.preventDefault();
              localStorage.setItem('isAuthenticated', 'true');
              navigate('/');
            }}
          >
            <Box className='flex flex-col gap-5'>
              <CustomTextField
                autoFocus
                fullWidth
                label='Email or Username'
                placeholder='Enter your email or username'
              />
              <CustomTextField
                fullWidth
                label='Password'
                placeholder='············'
                type={isPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        {isPasswordShown ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Box className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
                <FormControlLabel control={<Checkbox />} label='Remember me' />
                <Link href='#' underline='none' color='primary'>
                  Forgot password?
                </Link>
              </Box>
              <Button fullWidth variant='contained' type='submit'>
                Login
              </Button>
              <Box className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>New on our platform?</Typography>
                <Link href='/register' underline='none' color='primary'>
                  Create an account
                </Link>
              </Box>
              <Divider>or</Divider>
              <Box className='flex justify-center items-center gap-1.5'>
                <IconButton color='primary' size='small'>
                  <FacebookIcon />
                </IconButton>
                <IconButton color='info' size='small'>
                  <TwitterIcon />
                </IconButton>
                <IconButton size='small'>
                  <GitHubIcon />
                </IconButton>
                <IconButton color='error' size='small'>
                  <GoogleIcon />
                </IconButton>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login; 