import { combineReducers } from 'redux'
import {
  userOrganizationReducer,
  userPublicInfoReducer
} from 'app-redux/thunks/users/reducer'

const rootReducer = combineReducers({
  userPublicInfo: userPublicInfoReducer,
  userOrganization: userOrganizationReducer
})

export default rootReducer
