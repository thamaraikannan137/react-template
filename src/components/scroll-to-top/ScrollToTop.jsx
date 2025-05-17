// React Imports
import React, { useState, useEffect } from 'react';

// MUI Imports
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

const ScrollToTopButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(6),
  bottom: theme.spacing(6),
  zIndex: 11,
  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(4),
    bottom: theme.spacing(4)
  }
}));

const ScrollToTop = () => {
  // States
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={show}>
      <ScrollToTopButton
        size="small"
        aria-label="scroll back to top"
        onClick={handleScrollToTop}
        color="primary"
      >
        <KeyboardArrowUpIcon />
      </ScrollToTopButton>
    </Zoom>
  );
};

export default ScrollToTop; 