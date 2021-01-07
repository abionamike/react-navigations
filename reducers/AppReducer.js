export const loginReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        userName: action.id,
        userToken: action.token,
        isLoading: false
      }
    case 'LOGOUT':
      return {
        userName: null,
        userToken: null,
        isLoading: false
      }
      
    default:
      return state;
  }
}