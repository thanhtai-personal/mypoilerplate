import React from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

interface LoginProps {
  userName: String,
  password: String,
  updateUserName: any,
  updatePassword: any,
  text: any,
  login: any
}

const LoginComponent = (props: LoginProps) => {
  const classes = useStyles()
  const { text = {}, login, updateUserName, updatePassword, userName, password } = props
  const submitLogin = (event: any) => {
    event.preventDefault()
    typeof login === 'function' && login()
  }

  const onChangeEmail = (data: any) => {
    typeof updateUserName === 'function' && updateUserName(data.value)
    return true
  }
  
  const onChangePassword = (data: any) => {
    typeof updatePassword === 'function' && updatePassword(data.value)
    return true
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {text.login}
        </Typography>
        <form className={classes.form}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label={text.email}
            name='email'
            autoFocus
            autoComplete={'true'}
            onChange={onChangeEmail}
            defaultValue={userName}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label={text.password}
            type='password'
            id='password'
            onChange={onChangePassword}
            autoComplete={'true'}
            defaultValue={password}
          />
          <Button
            onClick={submitLogin}
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {text.login}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                {text.forgot}
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {text.dontHaveAccount}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginComponent