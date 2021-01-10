const initialState = {
  loading: true,
  error: false,
  data: {}
}

export const USERS = {
  FETCHING: 'FETCHING_USER_PUBLIC_INFO',
  ERROR: 'USER_PUBLIC_INFO_ERROR',
  FETCHED: 'FETCHED_USER_PUBLIC_INFO'
}

export const userPublicInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.FETCHING:
      return { ...state, loading: true }

    case USERS.ERROR:
      return { ...state, loading: false, error: action.payload }

    case USERS.FETCHED:
      return { ...state, data: action.payload, loading: false, error: false }

    default:
      return state
  }
}

// -------------- Organization ----------------

export const USER_ORGANIZATION = {
  FETCHING: 'FETCHING_USER_ORGANIZATION',
  FETCHED: 'FETCHED_USER_ORGANIZATION',
  ERROR: 'ERROR_USER_ORGANIZATION'
}

export const userOrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ORGANIZATION.FETCHING:
      return { ...state, loading: true }

    case USER_ORGANIZATION.FETCHED:
      return { ...state, loading: false, error: false, data: action.payload }

    case USER_ORGANIZATION.ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
