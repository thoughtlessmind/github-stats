import React from 'react'
import { Box, makeStyles, createStyles } from '@material-ui/core'

const Home = () => {
  const classes = useStyles()
  return <Box>Hello from Home</Box>
}

const useStyles = makeStyles((theme) => createStyles({}))

export default Home
