import axios from 'axios'
import { USERS, USER_ORGANIZATION } from './reducer'

/**
 * Fetch the public information of the user  
 * _endpoint_ : `/users/{username}`  
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
 * Fetches the related organizations of the user  
 * _endpoint_ : `/users/{username}/org`  
 * [Github API documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference/orgs#list-organizations-for-a-user)  
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
