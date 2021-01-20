import React from 'react'
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'
import { grey } from '@material-ui/core/colors'
import { useDispatch, useSelector } from 'react-redux'
import { swtichTabAction } from 'app-redux/thunks/tabsNavigation/actions'
import clsx from 'clsx'

const tabItems = [
  {
    name:'Overview',
    icon: <LibraryBooksOutlinedIcon />
  },
  {
    name:'Repos',
    icon: <LibraryBooksOutlinedIcon />
  },
  {
    name:'Open Source',
    icon: <LibraryBooksOutlinedIcon />
  },
]

const NaviagationTabs = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const {activeTab} = useSelector(state =>state.tabState)

  const handleTabSwitch = (val) =>  {
    dispatch(swtichTabAction(val))
  }

  return (
    <Box className={classes.tabsContainer}>
      {
        tabItems.map((tab, index)=>(
          <Box className={clsx({active: index === activeTab })} onClick={() => handleTabSwitch(index)}>
        {tab.icon}
        <Typography component={'span'}>{tab.name}</Typography>
      </Box>
        ))
      }
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    tabsContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '45px',
      '&> div': {
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
