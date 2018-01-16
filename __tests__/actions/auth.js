import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { loginUser } from '../../src/actions/auth';
import config from '../../config';

const mockStore = configureMockStore([thunk]);
describe('AuthActions', function() {
  mockAxios();
  const store = mockStore({ auth: null });
  const token = '14669a97-56de-42d1-b550-55c2298d783d';
  const url = config.API_HOST + '/api/token';

  describe('login', function() {
    it('returns a user token', function() {
      moxios.stubRequest(url, {
        status: 200,
        response: { token }
      });

      return store.dispatch(loginUser(token))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual([{ type: 'LOGIN_USER', token }]);
      });
    });
  });
});
