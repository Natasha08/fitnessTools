import authReducer from '../../src/reducers/auth';

describe('Auth Reducer', function() {
  it('adds the user token to state', function() {
    const token = '08cd7ce2-164c-46ea-8755-8474475e729b';
    const beforeState = undefined;
    const action = deepFreeze({ type: 'LOGIN_USER', token });
    const afterState = { token };

    expect(authReducer(beforeState, action)).toEqual(afterState);
  });
});
