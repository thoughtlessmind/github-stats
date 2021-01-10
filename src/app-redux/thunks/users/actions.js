import axios from 'axios'
import { USERS, USER_ORGANIZATION } from './reducer'

/**
 * #### endpoint : `/users/{username}`
 * Fetch the public information of the user
 * [Github API Documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference/users#list-users)
 * @param {String} username username of the user
 */
export const getUserPublicInfo = (user = 'gaearon') => {
  return async (dispatch) => {
    dispatch({ type: USERS.FETCHING })
    const res = await axios({
      method: 'GET',
      url: `https://api.github.com/users/${user}`
    })

    dispatch({ type: USERS.FETCHED, payload: res.data })
  }
}

/**
 * #### endpoint : `/users/{username}/org`
 * Fetches the related organizations of the user
 * [Github API Documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference/orgs#list-organizations-for-a-user)
 * @param {String} username username of the user
 */
export const getUserOrganizations = (username = 'gaearon') => {
  return async (dispatch) => {
    dispatch({ type: USER_ORGANIZATION.FETCHING })

    const res = await axios({
      method: 'GET',
      url: `https://api.github.com/users/${username}/orgs`
    })

    dispatch({ type: USER_ORGANIZATION.FETCHED, payload: res.data })
  }
}
