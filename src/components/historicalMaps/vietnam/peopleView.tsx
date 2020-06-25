import React, { useState } from 'react'
import { CardContent, Typography, Card,
  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
  Drawer
} from '@material-ui/core'
import Panel from './panel'
import { createStyles, makeStyles } from '@material-ui/core/styles'

interface PeopleViewProps {
  data: any
}
type Anchor = 'top' | 'left' | 'bottom' | 'right'

const defaultPeoples: any[] = [
  {
    name: 'Trần Quốc Tuấn',
    id: 'tranquoctuan'
  },
  {
    name: 'Trần Quốc Toản',
    id: 'tranquoctuan'
  },
  {
    name: 'Trần Thủ Độ',
    id: 'tranquoctuan'
  }
]

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      display: 'list-item'
    },
    personalCard: {
      border: 'outset 2px',
      borderRadius: '15px',
      marginLeft: '2px',
      cursor: 'pointer'
    },
    personalCardContent: {
      '&:hover': {
        color: 'yellow',
        backgroundColor: 'steelblue'
      }
    },
    fullList: {
      width: 'auto',
    },
    list: {
      width: '50vw',
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

const PeopleView = (props: PeopleViewProps) => {
  // const { data } = props
  let _data = defaultPeoples
  const classes = useStyles()
  const [ isCollapseContent, setIsCollapseContent ] = useState(false)
  const [panel, setPanel] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const handleChangeColappse = () => { setIsCollapseContent(!isCollapseContent) }

  const toggleDrawer = (anchor: Anchor, open: boolean, data: any) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    setPanel({ ...panel, [anchor]: open });
  }
  const list = (anchor: Anchor) => ( <Panel anchor={anchor} /> )
  return (
    <>
       <ExpansionPanel className={classes.root} square expanded={isCollapseContent} onChange={handleChangeColappse}>
        <ExpansionPanelSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>Danh nhân đất Việt</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {_data.map((person: any, index: number) => (
            <Card className={classes.personalCard} key={`${person.id}-${index}`} onClick={toggleDrawer('right', true, person.id)}>
              <CardContent className={classes.personalCardContent}>
                <h5>{person.name}</h5>
              </CardContent>
            </Card>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={panel[anchor]} onClose={toggleDrawer(anchor, false, null)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  )
}

export default PeopleView