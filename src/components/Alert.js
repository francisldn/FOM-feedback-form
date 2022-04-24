import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ({alert, setAlert}) => {
    const handleClose = (reason) => {
        if(reason === "clickaway") {
            return;
        }
        setAlert({
            open:false,
            type: 'error',
            message: "Please submit a rating"
        });
    }

  return (
    <Snackbar
    open={alert.open}
    autoHideDuration={2000}
    onClose={handleClose}
    >
    <MuiAlert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
    >
        {alert.message}
    </MuiAlert>
    </Snackbar>
  )
}

export default Alert;