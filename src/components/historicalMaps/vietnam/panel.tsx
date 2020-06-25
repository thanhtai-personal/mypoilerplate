
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { List, Divider, ListItemText, ListItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
    },
    fullList: {
      width: 'auto',
    },
    list: {
      width: '30vw',
      backgroundColor: '#e6f2ff',
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
  })
});

const Panel = (props: any) => {
  const classes = useStyles()
  const { anchor, celebrityData } = props
  const infos = celebrityData?.data || []
  const listItems = infos.map((info: any, index: number) => (
    <Fragment key={`${info.key}-${index}`}>
      <ListItem button>
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
        <ListItemText primary={'WiKi'} secondary={celebrityData?.wiki} onClick={() => { openWiki(celebrityData?.wiki) }} />
      </ListItem>
      <ListItem button key='special-name'>
        <h4 style={{ color: 'yellow'}}>{celebrityData?.specialName}</h4>
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