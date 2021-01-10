import { combineReducers } from 'redux'
import { policySearchRducer } from 'app-redux/thunks/policySearch/reducer'
import { userPublicInfoReducer } from 'app-redux/thunks/users/reducer'

const rootReducer = combineReducers({
  policyData: policySearchRducer,
  userPublicInfo: userPublicInfoReducer
})

export default rootReducer
