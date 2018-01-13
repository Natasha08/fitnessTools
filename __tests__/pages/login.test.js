import React from 'react';
import { mount } from 'enzyme';
import { Simulate } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

import Login from '../../src/pages/login';

describe('Login Page', function() {

  it('sets the state with the entered username and password', function() {
    const wrapper = mount(<Login />);
    const usernameInput = wrapper.find({ placeholder: 'Enter your username' }).hostNodes();
    usernameInput.simulate('change', { target: { value: 'test user' }});

    const passwordInput = wrapper.find({ placeholder: 'Enter your password' }).hostNodes();
    passwordInput.simulate('change', { target: { value: 'password' }});

    const { username, password } = wrapper.state();

    expect(username).toEqual('test user');
    expect(password).toEqual('password');
  });
});
