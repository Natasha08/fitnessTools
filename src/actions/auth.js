export default {
  login: (token) => {
    return {
      type: 'LOGIN_USER',
      token
    }
  }
}
