import React from 'react'
import { Box, makeStyles, createStyles } from '@material-ui/core'
import CardsContainer from './CardsContainer'

const OverView = () => {
  const classes = useStyles()
  return (
    <Box>
      <CardsContainer />
    </Box>
  )
}

const useStyles = makeStyles((theme) => createStyles({}))

export default OverView
