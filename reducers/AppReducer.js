export const loginReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userName: action.id,
        userToken: action.token,
        isLoading: false
      }
    case 'LOGOUT':
      return {
        ...state,
        userName: null,
        userToken: null,
        isLoading: false
      }
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      }
      
    default:
      return state;
  }
}