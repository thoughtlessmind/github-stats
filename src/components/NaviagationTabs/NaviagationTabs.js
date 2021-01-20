import React from 'react'
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'
import { grey } from '@material-ui/core/colors'
import { NavLink } from 'react-router-dom'

const NaviagationTabs = () => {
  const classes = useStyles()
  return (
    <Box className={classes.tabsContainer}>
      <Box component={NavLink} to="/">
        <LibraryBooksOutlinedIcon />
        <Typography component={'span'}>Overview</Typography>
      </Box>
      <Box component={NavLink} to="/repos">
        <LibraryBooksOutlinedIcon />
        <Typography component={'span'}>Repos</Typography>
      </Box>
      <Box component={NavLink} to="/open-source">
        <LibraryBooksOutlinedIcon />
        <Typography component={'span'}>Open Source</Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    tabsContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '45px',
      '&> a': {
        width: '150px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
        cursor: 'pointer',
        color: grey[800],
        textDecoration: 'none',
        position: 'relative',
        '&.active, &:hover': {
          '&:after': {
            position: 'absolute',
            content: '" "',
            bottom: '0',
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'red'
          }
        },
        '&> svg': {
          color: grey[600],
          fontSize: '16px'
        }
      }
    }
  })
)

export default NaviagationTabs
