import React from 'react'
import { Typography, TextField } from '@material-ui/core'

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Thông tin bổ sung
      </Typography>
      <TextField
          id='outlined-multiline-flexible'
          label=''
          multiline
          variant='outlined'
          fullWidth
        />
    </React.Fragment>
  );
}