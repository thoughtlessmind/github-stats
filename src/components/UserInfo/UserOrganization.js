import React from 'react'
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Skeleton } from '@material-ui/lab'

const UserOrganization = () => {
  const classes = useStyles()
  const { loading, data: userOrganization } = useSelector(
    (state) => state.userOrganization
  )
  return (
    <Box
      style={{
        display: !loading && userOrganization.length == 0 ? 'none' : 'inherit'
      }}
      className={classes.userOrganizationContainer}
    >
      <Typography variant="h6">Organizations</Typography>
      <Box className={classes.orgAvatarContainer}>
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {userOrganization.map((org) => (
              // <Typography variant="body2">{org.login}</Typography>
              <a
                href={`https://github.com/${org.login}`}
                rel="noreferrer"
                target="_blank"
                className={classes.orgAvatarWrapper}
              >
                <img
                  width="32px"
                  height="32px"
                  src={org.avatar_url}
                  alt={org.login}
                />
              </a>
            ))}
          </>
        )}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    userOrganizationContainer: {
      marginTop: theme.spacing(2),
      '&>h6:first-child': {
        marginBottom: theme.spacing(1)
      }
    },
    orgAvatarContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(0.5),
      flexWrap: 'wrap',

      '&>span': {
        borderRadius: theme.shape.borderRadius
      }
    },
    orgAvatarWrapper: {
      cursor: 'pointer',
      width: 32,
      height: 32,
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
      boxShadow: '2px 2px 6px 1px #dadada'
    }
  })
)

export default UserOrganization

/**
 * Loading animation skeleton
 */
const LoadingSkeleton = () => {
  return (
    <>
      <Skeleton variant="rect" width={25} height={25} />
      <Skeleton variant="rect" width={25} height={25} />
      <Skeleton variant="rect" width={25} height={25} />
      <Skeleton variant="rect" width={25} height={25} />
      <Skeleton variant="rect" width={25} height={25} />
    </>
  )
}
