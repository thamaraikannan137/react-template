const overrides = skin => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: skin === 'bordered' ? '0 0 0 1px rgba(0, 0, 0, 0.12)' : '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    // Add more component overrides as needed
  }
}

export default overrides 