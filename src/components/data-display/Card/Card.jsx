// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledCard = styled(MuiCard)(({ theme, elevation }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.customShadows?.[elevation] || theme.shadows[elevation],
  position: 'relative',
  transition: 'all 0.25s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.customShadows?.lg || theme.shadows[8]
  }
}));

const Card = ({
  title,
  subheader,
  headerAction,
  children,
  footer,
  elevation = 1,
  onClose,
  divider = true,
  sx,
  ...props
}) => {
  return (
    <StyledCard elevation={elevation} sx={sx} {...props}>
      {(title || subheader || headerAction || onClose) && (
        <CardHeader
          title={
            title && (
              <Typography variant="h6" component="div">
                {title}
              </Typography>
            )
          }
          subheader={
            subheader && (
              <Typography variant="subtitle2" color="text.secondary">
                {subheader}
              </Typography>
            )
          }
          action={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {headerAction}
              {onClose && (
                <IconButton size="small" onClick={onClose} edge="end">
                  <i className='bx-x' />
                </IconButton>
              )}
            </div>
          }
          sx={{
            p: 3,
            ...(divider && {
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`
            })
          }}
        />
      )}
      
      <CardContent sx={{ p: 3 }}>
        {children}
      </CardContent>

      {footer && (
        <CardActions
          sx={{
            p: 3,
            pt: 0,
            justifyContent: 'flex-end',
            gap: 1
          }}
        >
          {footer}
        </CardActions>
      )}
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  subheader: PropTypes.node,
  headerAction: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  elevation: PropTypes.number,
  onClose: PropTypes.func,
  divider: PropTypes.bool,
  sx: PropTypes.object
};

export default Card; 