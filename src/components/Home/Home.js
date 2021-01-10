import React from 'react'
import { Box, makeStyles, createStyles } from '@material-ui/core'
import { useEffect } from 'react'
import { getUserPublicInfo } from 'app-redux/thunks/users/actions'
import { useDispatch } from 'react-redux'

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserPublicInfo())
  }, [])
  return <Box></Box>
}

const useStyles = makeStyles((theme) => createStyles({}))

export default Home
