import { combineReducers } from 'redux'
import {
  userOrganizationReducer,
  userPublicInfoReducer
} from 'app-redux/thunks/users/reducer'
import { tabSwitchReducer } from 'app-redux/thunks/tabsNavigation/reducers'

const rootReducer = combineReducers({
  userPublicInfo: userPublicInfoReducer,
  userOrganization: userOrganizationReducer,
  tabState: tabSwitchReducer
})

export default rootReducer
