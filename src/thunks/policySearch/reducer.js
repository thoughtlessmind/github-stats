const initialState = {
  loading: false,
  error: false,
  data: {}
}

export const policySearchRducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_FETCHD':
      return { ...state, data: action.payload }

    default:
      return state
  }
}
