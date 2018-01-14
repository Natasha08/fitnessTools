export default function(state={}, action) {
  if (action.type === 'LOGIN_USER') {
    const token = action.token;
    return { ...state, token };
  }
  return state;
}
