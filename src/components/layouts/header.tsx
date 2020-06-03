import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Typography, Button, IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

interface HeaderProps {
  history: any,
  lang: any
}

const Header = (props: HeaderProps) => {
  const classes = useStyles()
  const { lang, history } = props
  const text = lang?.headerComponent
  const onClickLogin = () => {
    history?.push('/login')
  }
  const onClickRegister = () => {
    history?.push('/register')
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" onClick={onClickLogin}>{text?.login}</Button>
          <Button color="inherit" onClick={onClickRegister}>{text?.register}</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header