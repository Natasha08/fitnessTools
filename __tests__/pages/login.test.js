import React from 'react';
import { mount } from 'enzyme';
import { Simulate } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { Login } from '../../src/screens/login';
import config from '../../config';

const mockStore = configureMockStore([thunk]);

const findElement = (wrapper, selector) => {
  const element = wrapper.find(selector);
  return element.hostNodes();
};

const changeInput = (input, update) => {
  input.simulate('change', { target: { value: update }});
};

describe('Login Page', function() {
  mockAxios();

  it('sets the state with the entered username and password', function() {
    const wrapper = mount(<Login />);

    const usernameInput = findElement(wrapper, { placeholder: 'Enter your username' });
    const passwordInput = findElement(wrapper, { placeholder: 'Enter your password' });
    changeInput(usernameInput, 'test user');
    changeInput(passwordInput, 'password');

    const { username, password } = wrapper.state();

    expect(username).toEqual('test user');
    expect(password).toEqual('password');
  });

  it('calls the api with user info', function() {
    // const store = mockStore({ auth: null });
    // const login = () => jest.fn();
    // // const dispatch = (loginSpy) => loginSpy();
    // const wrapper = mount(<Login login={login}/>, { context: { store }});
    // const usernameInput = findElement(wrapper, '.username');
    // const passwordInput = findElement(wrapper, '.password');
    // changeInput(usernameInput, 'test user');
    // changeInput(passwordInput, 'password');
    // //
    // const submit = wrapper.find('Button').filterWhere(matchText('Login'));
    // // submit.simulate('click');
    //
    // expect(login).toHaveBeenCalled();
  });
});
