import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const LinkButton = (props) => {
  const { to, text, ...nestedProps } = props
  return (
    <Button color="inherit" {...nestedProps}>
      <Link to={props.to}>{props.text}</Link>
    </Button>
  )
}

export default LinkButton