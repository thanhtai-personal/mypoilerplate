
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { List, Divider, ListItemText, ListItem } from '@material-ui/core'
import { BrightTextAnimation } from 'root/constants/commonStyled'

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
    },
    fullList: {
      width: 'auto',
    },
    list: {
      minWidth: '35vw',
      maxWidth: '50vh',
      backgroundColor: '#4682B4',
      height: '100vh',
      // overflow: 'scroll',
      'overflow-y': 'auto',
      '&::-webkit-scrollbar-thumb': {
        background: 'steelblue',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px grey',
        borderRadius: '10px',
      }
    },
    lastItemList: {
      bottom: '20px',
      position: 'fixed',
      color: 'orange',
      border: 'solid 2px yellow'
    },
    wikiText: {
      overflow: 'hidden',
      fontSize: '1.5em'
    }
  })
});

const Panel = (props: any) => {
  const classes = useStyles()
  const { anchor, celebrityData } = props
  const infos = celebrityData?.data || []
  const listItems = infos.map((info: any, index: number) => (
    <Fragment key={`${info.key}-${index}`}>
      <ListItem button onClick={() => { info.wiki && window.open(info.wiki, '_blank')}}>
        <ListItemText primary={info.label} secondary={info.value}  />
      </ListItem>
      <Divider />
    </Fragment>
  ))
  const openWiki = (link: any) => { window.open(link, '_blank') }
  return (<div
    className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })}
    role='presentation'
  >
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {listItems}
      <ListItem button key='wiki'>
        <ListItemText className={classes.wikiText} primary={'Thêm thông tin...'} secondary='Wiki' onClick={() => { openWiki(celebrityData?.wiki) }} />
      </ListItem>
      <ListItem button key='empty'>
        <ListItemText />
      </ListItem>
      <ListItem className={classes.lastItemList} button key='special-name'>
        <BrightTextAnimation>{celebrityData?.specialName}</BrightTextAnimation>
      </ListItem>
    </List>
  </div>)
}

const mapState = (state: any) => ({
  celebrityId: state.historicalMaps?.celebrityId,
  celebrityData: state.historicalMaps?.celebrityData
})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(Panel)