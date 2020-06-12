import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Typography, IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LinkButton from 'root/components/commons/linkButton'

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
  const { lang } = props
  const text = lang?.headerComponent
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} />
          <LinkButton to={'/login'} text={text.login}/>
          <LinkButton to={'/register'} text={text.register}/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header