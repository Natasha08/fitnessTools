import React from 'react';
import { mount } from 'enzyme';
import { Simulate } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { Login } from '../../src/pages/login';

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

  it('calls the api with user info and receives a token', function() {
    moxios.stubRequest('https://mycolofitness.herokuapp.com/api/token', {
      status: 200,
      response: { token: 'f79f6a6d-dfce-4350-9185-eec2f61ef310' }
    });

    const store = mockStore({});
    const wrapper = mount(<Login />, { context: { store }});
    const usernameInput = findElement(wrapper, { placeholder: 'Enter your username' });
    const passwordInput = findElement(wrapper, { placeholder: 'Enter your password' });
    changeInput(usernameInput, 'test user');
    changeInput(passwordInput, 'password');

    const submit = wrapper.find('Button').filterWhere(matchText('Login'));
    submit.simulate('click');
  });

  it('updates the store', function() {

  });
});
