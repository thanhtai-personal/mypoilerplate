
import React, { Fragment } from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const loremText = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
, by injected humour, or randomised words which don't look even slightly believable
.\n If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures
, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition
, injected humour, or non-characteristic words etc.nn`


const replaceBreakLine = (string: string) => {
  const newString = string.replace(/\n/g, '<br />')
  const listStrings = newString.split('<br />')
  return (
    <h5>
      {listStrings.map((str, index: number) => {
        return (<Fragment key={`break-line-key-${index}`}>{str}<br /></Fragment>)
      })}
    </h5>
  )
}

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
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

const Panel = (props: any) => {
  const classes = useStyles()
  const { anchor } = props
  return (<div
    className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })}
    role="presentation"
  >
    <h6>{replaceBreakLine(loremText)}</h6>
    <h6>{replaceBreakLine(loremText)}</h6>
    <h6>{replaceBreakLine(loremText)}</h6>
    <h6>{replaceBreakLine(loremText)}</h6>
    <h6>{replaceBreakLine(loremText)}</h6>
    <h6>{replaceBreakLine(loremText)}</h6>
  </div>)
}

export default Panel