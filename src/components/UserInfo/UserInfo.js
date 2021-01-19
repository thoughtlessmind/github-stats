import React from 'react'
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link'
import DateRangeIcon from '@material-ui/icons/DateRange'
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { useSelector } from 'react-redux'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import { abbrNumber } from 'utils/abbrNumber'
import UserOrganization from './UserOrganization'

const UserInfo = () => {
  const classes = useStyles()
  const { data: userInfo, loading: userInfoLoading } = useSelector(
    (state) => state.userPublicInfo
  )
  return (
    <Box className={classes.userInfoContainer}>
      {userInfoLoading ? (
        'loading ...'
      ) : (
        <>
          <img
            src={userInfo.avatar_url}
            alt="Github Avatar"
            className={classes.avatarStyle}
          />
          <Typography title={userInfo.name} variant="h6">
            {userInfo.name}
          </Typography>
          <Typography
            component="a"
            className={classes.githubProfileLink}
            target="_blank"
            href={userInfo.html_url}
            title={userInfo.login}
          >
            <GitHubIcon /> {userInfo.login}
          </Typography>

          <Typography className={classes.userBioStyle}>
            <span>"</span>
            {userInfo.bio}
          </Typography>

          <Typography className={classes.flexLineWithIcon}>
            <PeopleOutlineIcon fontSize="small" />
            <Typography
              component="a"
              href={`${userInfo.html_url}?tab=followers`}
              target="_blank"
            >
              <b>{abbrNumber(userInfo.followers, 1)}</b> followers
            </Typography>
            &nbsp;·&nbsp;
            <Typography
              component="a"
              href={`${userInfo.html_url}?tab=following`}
              target="_blank"
            >
              <b>{abbrNumber(userInfo.following, 1)}</b> following
            </Typography>
          </Typography>

          {userInfo.blog && (
            <Typography className={classes.flexLineWithIcon}>
              <LinkIcon fontSize="small" />
              <Typography href={userInfo.blog} target="_blank" component={'a'}>
                {userInfo.blog}
              </Typography>
            </Typography>
          )}

          {userInfo.company && (
            <Typography className={classes.flexLineWithIcon}>
              <BusinessRoundedIcon fontSize="small" />
              <Typography
                href={`https://github.com/${userInfo.company.substring(1)}`}
                target="_blank"
                component={'a'}
              >
                {userInfo.company}
              </Typography>
            </Typography>
          )}

          <Typography
            className={classes.flexLineWithIcon}
            style={{ display: 'none' }}
          >
            <MailOutlineIcon fontSize="small" />
            <Typography component={'a'} href={userInfo.mail}>
              {userInfo.email}
            </Typography>
          </Typography>

          <Typography className={classes.flexLineWithIcon}>
            <DateRangeIcon fontSize="small" />
            <span>Joined &nbsp;</span> <time>{userInfo.created_at}</time>
          </Typography>
        </>
      )}
      <UserOrganization />
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    avatarStyle: {
      height: '140px',
      width: '140px',
      borderRadius: '50%',
      display: 'block'
    },
    githubProfileLink: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      color: '#586069',
      fontWeight: '300',
      textDecoration: 'none',
      fontSize: 20,
      '& svg': {
        color: '#000'
      }
    },
    userBioStyle: {
      fontWeight: '400',
      fontStyle: 'italic',
      position: 'relative',
      paddingLeft: 18,
      fontSize: 14,
      marginTop: theme.spacing(1),
      '& span:first-child': {
        position: 'absolute',
        color: 'gray',
        fontSize: 40,
        lineHeight: 1,
        fontWeight: 300,
        top: 0,
        left: 0
      }
    },
    flexLineWithIcon: {
      display: 'flex',
      alignItems: 'center',
      color: grey[800],
      margin: '2px 0',
      '&>a, &>time, &>span': {
        fontSize: 12,
        whiteSpace: 'nowrap',
        color: 'inherit',
        textDecoration: 'none'
      },
      '&>a': {
        // textDecoration: 'underline',
        position: 'relative',
        '&:after': {
          position: 'absolute',
          bottom: 2,
          left: 0,
          height: 1,
          content: '" "',
          backgroundColor: 'grey',
          transformOrigin: 'left',
          width: '0',
          transition: '0.2s '
        },
        '&:hover': {
          '&:after': {
            width: '100%'
          }
        }
      },
      '&>svg': {
        marginRight: theme.spacing(0.5)
      }
    },

    [theme.breakpoints.down('sm')]: {
      userInfoContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }
    }
  })
)

export default UserInfo
