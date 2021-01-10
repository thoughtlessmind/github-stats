import React, { useEffect } from 'react'
import { Box, makeStyles, createStyles, Grid } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { AppHeader, UserInfo } from 'components'

const App = (props) => {
  const classes = useStyles()
  return (
    <Box>
      <AppHeader />
      {props.children}
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      '& > div:first-child': {
        flexBasis: '1',
        flexShrink: '0'
      }
    }
  })
)

export default App
