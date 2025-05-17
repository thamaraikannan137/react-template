// React Imports
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// MUI Imports
import MuiDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.customShadows?.dialog || theme.shadows[8]
  },
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(4),
    '& + .MuiDialogContent-root': {
      paddingTop: 0
    }
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4),
    '& + .MuiDialogContent-root': {
      paddingTop: 0
    }
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(3),
    paddingTop: 0,
    justifyContent: 'flex-end',
    gap: theme.spacing(2)
  }
}));

const Dialog = forwardRef(({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm',
  fullWidth = true,
  fullScreen = false,
  hideCloseButton = false,
  disableEscapeKeyDown = false,
  titleProps = {},
  contentProps = {},
  actionsProps = {},
  TransitionComponent = Fade,
  TransitionProps = {},
  ...props
}, ref) => {
  return (
    <StyledDialog
      ref={ref}
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      disableEscapeKeyDown={disableEscapeKeyDown}
      TransitionComponent={TransitionComponent}
      TransitionProps={TransitionProps}
      {...props}
    >
      {(title || !hideCloseButton) && (
        <DialogTitle
          {...titleProps}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...titleProps.sx
          }}
        >
          {typeof title === 'string' ? (
            <Typography variant="h6" component="span">
              {title}
            </Typography>
          ) : (
            title
          )}
          {!hideCloseButton && onClose && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'text.secondary'
              }}
            >
              <i className='bx-x' />
            </IconButton>
          )}
        </DialogTitle>
      )}
      <DialogContent {...contentProps}>
        {children}
      </DialogContent>
      {actions && (
        <DialogActions {...actionsProps}>
          {actions}
        </DialogActions>
      )}
    </StyledDialog>
  );
});

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.node,
  children: PropTypes.node,
  actions: PropTypes.node,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
  fullWidth: PropTypes.bool,
  fullScreen: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  titleProps: PropTypes.object,
  contentProps: PropTypes.object,
  actionsProps: PropTypes.object,
  TransitionComponent: PropTypes.elementType,
  TransitionProps: PropTypes.object
};

Dialog.displayName = 'Dialog';

export default Dialog; 