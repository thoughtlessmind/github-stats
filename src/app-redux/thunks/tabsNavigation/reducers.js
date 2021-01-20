const initialState = {
  activeTab: 0
}

export const tabSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_TAB':
      return { ...state, activeTab: action.payload }

    default:
      return state
  }
}
