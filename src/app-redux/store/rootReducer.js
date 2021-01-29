import { combineReducers } from 'redux'
import {
  userOrganizationReducer,
  userPublicInfoReducer
} from 'app-redux/thunks/users/reducer'
import { tabSwitchReducer } from 'app-redux/thunks/tabsNavigation/reducers'
import { userPublicReposReducer } from 'app-redux/thunks/repos/reducer'

const rootReducer = combineReducers({
  userPublicInfo: userPublicInfoReducer,
  userOrganization: userOrganizationReducer,
  tabState: tabSwitchReducer,
  userRepos: userPublicReposReducer
})

export default rootReducer
