import axios from 'axios'

export const fetchPolicyData = (trackingId) => {
  return async (dispatch) => {
    const res = await axios({
      method: 'GET',
      url: `/policy/search/${trackingId}?type=live`
    })
    dispatch({ type: 'DATA_FETCHD', payload: res.data })
  }
}

// export const fetchPolicies = () => {
//   return async (dispatch) => {
//     dispatch({ type: POLICIES.LOADING })
//     const res = await Axios({
//       url: '/policies',
//       method: 'GET'
//     })
//     // console.log(res)
//     dispatch({ type: POLICIES.FETCH, payload: res.data })
//   }
// }
