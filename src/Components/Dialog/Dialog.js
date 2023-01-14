import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Dialog = () => {
  return (
    <Dialog>
      <DialogTitle>Confirmation Dialog</DialogTitle>

      <DialogContent>
        <DialogContentText>Do you want to delete the user?</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button>No</Button>
        <Button>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialog;
