import React, { useEffect } from 'react'
import { Box, makeStyles, createStyles } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

const App = (props) => {
  const classes = useStyles()
  return <Box>{props.children}</Box>
}

const useStyles = makeStyles((theme) => createStyles({}))

export default App
