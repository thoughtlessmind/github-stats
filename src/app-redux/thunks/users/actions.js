import axios from 'axios'
import { USERS } from './reducer'

/**
 * Fetch the public information of the user
 * endpoint:- `/users/{username}`
 */
export const getUserPublicInfo = () => {
  return async (dispatch) => {
    dispatch({ type: USERS.FETCHING })
    const res = await axios({
      method: 'GET',
      url: 'https://api.github.com/users/gaearon'
    })

    dispatch({ type: USERS.FETCHED, payload: res.data })
  }
}
