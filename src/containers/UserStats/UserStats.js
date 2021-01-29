import React from 'react'
import {
  makeStyles,
  createStyles,
  Grid,
  Typography,
  Box
} from '@material-ui/core'
import { UserInfo } from 'components'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  getUserOrganizations,
  getUserPublicInfo
} from 'app-redux/thunks/users/actions'
import NaviagationTabs from 'components/NaviagationTabs/NaviagationTabs'
import { getUserPublicRepos } from 'app-redux/thunks/repos/actions'
import OverView from 'components/Overview/OverView'

const UserStats = (props) => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPublicInfo())
    dispatch(getUserOrganizations())
    dispatch(getUserPublicRepos())
  }, [])

  return (
    <Grid container>
      <Grid md={3} sm={3} xs={12} item>
        <UserInfo />
      </Grid>
      <Grid md={9} sm={9} xs={12}>
        <NaviagationTabs />
        <TabPanel value={0} index={0}>
          <OverView />
        </TabPanel>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => createStyles({}))

export default UserStats


function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={2} pb={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}