import authActions from '../../src/actions/auth';

describe('AuthActions', function() {
  const token = '14669a97-56de-42d1-b550-55c2298d783d';

  describe('login', function() {
    it('returns a user token', function() {
      expect(authActions.login(token)).toEqual({
        type: 'LOGIN_USER', token
      });
    });
  });
});
