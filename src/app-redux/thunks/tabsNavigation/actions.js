export const swtichTabAction = (tabValue) => {
  return (dispatch) => {
    dispatch({ type: 'SWITCH_TAB', payload: tabValue })
  }
}
