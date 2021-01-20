import React from 'react'
import { makeStyles, createStyles, Grid } from '@material-ui/core'
import { UserInfo } from 'components'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  getUserOrganizations,
  getUserPublicInfo
} from 'app-redux/thunks/users/actions'
import NaviagationTabs from 'components/NaviagationTabs/NaviagationTabs'

const UserStats = (props) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPublicInfo())
    dispatch(getUserOrganizations())
  }, [])

  return (
    <Grid container>
      <Grid md={3} sm={3} xs={12} item>
        <UserInfo />
      </Grid>
      <Grid md={9} sm={9} xs={12}>
        <NaviagationTabs />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => createStyles({}))

export default UserStats
