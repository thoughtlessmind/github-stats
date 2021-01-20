import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getUserOrganizations,
  getUserPublicInfo
} from 'app-redux/thunks/users/actions'
import { useHistory } from 'react-router-dom'

const AppHeader = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [userName, setUserName] = useState('')

  const __handleUserSearch = (e) => {
    e.preventDefault()
    dispatch(getUserPublicInfo(userName))
    dispatch(getUserOrganizations(userName))
    history.push(`/${userName}`)
  }

  const handleUserInput = (e) => {
    setUserName(e.target.value)
  }

  return (
    // <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            GitHub Stats
          </Typography>
          <form
            onSubmit={__handleUserSearch}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                value={userName}
                onChange={handleUserInput}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button type="submit" variant="contained">
              Search
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    // {/* </div> */}
  )
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1
  // },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

export default AppHeader
