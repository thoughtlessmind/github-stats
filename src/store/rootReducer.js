import { combineReducers } from 'redux'
import { policySearchRducer } from 'thunks/policySearch/reducer'

const rootReducer = combineReducers({
  policyData: policySearchRducer
})

export default rootReducer
