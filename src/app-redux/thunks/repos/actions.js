import axios from 'axios'
import { USERREPOS, USER_ORGANIZATION } from './reducer'

/**
 * Fetch the public repos of the user
 * _endpoint_ : `/users/{username}/repos`
 * [Github API Documentation](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)
 * @param {String} username username of the user
 * @action
 */
export const getUserPublicRepos = (user = 'gaearon') => {
  return async (dispatch) => {
    dispatch({ type: USERREPOS.FETCHING })

    let nextUrl = `https://api.github.com/users/${user}/repos`
    let aggregateData = []
    try {
      while (true) {
        const res = await axios({
          method: 'GET',
          url: nextUrl,
          params: {
            per_page: 100
          }
        })
        aggregateData = aggregateData.concat(res.data)
        if (res.headers.link.includes('next')) {
          nextUrl = generateResponseHeaderLinks(res.headers.link).next
        } else {
          break
        }
      }
    } catch (err) {
      dispatch({ type: USERREPOS.ERROR, payload: 'Somethig went wrong' })
    }

    dispatch({ type: USERREPOS.FETCHED, payload: aggregateData })
  }
}

/**
 * Generate the object of links received in repo api response
 * @param {String} responseString link string recieved in response headers
 */
const generateResponseHeaderLinks = (responseString) => {
  let arr = responseString.split(',')
  let obj = {}
  arr.forEach((item, index, ar) => {
    obj[
      item.split('rel=')[1].substring(1, item.split('rel=')[1].length - 1)
    ] = item.substring(item.indexOf('<') + 1, item.indexOf('>'))
  })
  return obj
}

/**
 * Fetches the related organizations of the user
 * _endpoint_ : `/users/{username}/org`
 * [Github API Documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference/orgs#list-organizations-for-a-user)
 * @param {String} username username of the user
 * @action
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
