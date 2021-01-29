import React from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core'
import CodeRoundedIcon from '@material-ui/icons/CodeRounded'
import BookIcon from '@material-ui/icons/Book'
import { Avatar } from 'CustomComponents'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getLanguagesOfRepos } from 'utils'

const CardsContainer = () => {
  const classes = useStyles()
  const { data, error } = useSelector((state) => state.userPublicInfo)
  const { data: userRepos } = useSelector((state) => state.userRepos)

  useEffect(() => {
    console.log(getLanguagesOfRepos(userRepos))
  }, [userRepos])
  return (
    <Box className={classes.cardsContainer}>
      <Card>
        <CardHeader
          title={<Typography>Total Repos</Typography>}
          avatar={
            <Avatar size="small">
              <BookIcon />
            </Avatar>
          }
        />
        <CardContent>
          <Typography variant="h4">{data.public_repos}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader
          title={<Typography>Languages</Typography>}
          avatar={
            <Avatar size="small">
              <CodeRoundedIcon />
            </Avatar>
          }
        />
        <CardContent>
          <Typography variant="h4">
            {getLanguagesOfRepos(userRepos).length}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    cardsContainer: {
      display: 'flex',
      gap: theme.spacing(2),
      '&>div': {
        width: '170px',
        height: '150px',
        '& h4': {
          textAlign: 'center'
        }
      }
    }
  })
)

export default CardsContainer
