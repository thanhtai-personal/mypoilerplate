import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Typography, IconButton, Grid, Switch
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LinkButton from 'root/components/commons/linkButton'
import CONSTANTS from 'root/constants/constants'

const { themeEnum } = CONSTANTS

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
  lang: any,
  setTheme: any,
  theme: String,
}

const Header = (props: HeaderProps) => {
  const classes = useStyles()
  const { lang, setTheme, theme } = props
  const text = lang?.headerComponent
  const onChangeTheme = (e: any) => {
    const checked = e?.target?.checked
    if (checked) {
      setTheme(themeEnum.dark)
    } else {
      setTheme(themeEnum.light)
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography component='div'>
        <Grid component='label' container alignItems='center' spacing={1}>
          <Grid item>{text.light}</Grid>
          <Grid item>
              <Switch checked={theme === themeEnum.dark} onChange={onChangeTheme} name='checkedC' />
          </Grid>
          <Grid item>{text.dark}</Grid>
        </Grid>
      </Typography>
          <Typography variant='h6' className={classes.title} />
          <LinkButton to={'/aboutMe'} text={text.aboutMe}/>
          <LinkButton to={'/login'} text={text.login}/>
          <LinkButton to={'/register'} text={text.register}/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header