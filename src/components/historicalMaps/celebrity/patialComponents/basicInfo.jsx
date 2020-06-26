import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Thông tin cơ bản
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id='name'
            name='name'
            label='Tên gọi'
            fullWidth
            autoComplete='full-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='nickname'
            name='nickname'
            label='Thụy Hiệu'
            fullWidth
            autoComplete='nick-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='nickname2'
            name='nickname2'
            label='Tước Hiệu'
            fullWidth
            autoComplete='nick-name2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='trieudai'
            name='trieudai'
            label='Triều đại'
            fullWidth
            autoComplete='trieudai'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='namsinh'
            name='namsinh'
            label='Năm sinh'
            fullWidth
            type='number'
            autoComplete='namsinh'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='nammat'
            name='nammat'
            label='Năm mất'
            type='number'
            fullWidth
            autoComplete='nammat'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='ngaysinh'
            name='ngaysinh'
            label='Ngày sinh'
            fullWidth
            autoComplete='ngaysinh'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='ngaymat'
            name='ngaymat'
            label='Ngày mất'
            fullWidth
            autoComplete='ngaymat'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='noiantang'
            name='noiantang'
            label='Nơi an táng'
            fullWidth
            autoComplete='noiantang'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}