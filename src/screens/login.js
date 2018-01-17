import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, AppRegistry } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'

import axios from 'axios';

import { loginUser, userReceived } from '../actions/auth';
import config from '../../config';

const clearStackAndNavigate = (routeName, dispatch) => {
  const resetAction = NavigationActions.reset({
   index: 0,
   actions: [
     NavigationActions.navigate({ routeName })
   ],
   key: null
 });
 dispatch(resetAction);
};

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  navigateToHome() {
    const { dispatch, state } = this.props.navigation;

    clearStackAndNavigate('Home', dispatch);
  }

  submit = (e) => {
    e.preventDefault();
    const { username='', password='' } = this.state;
    const { userReceived, navigation } = this.props;
    const url = config.API_HOST + '/api/token';
    const user = { username: config.USERNAME, password: config.PASSWORD };

    return axios.post(url, user)
    .then((response) => {
      userReceived(response.data);
      this.navigateToHome()
    })
    .catch((error) => console.log("ERROR LOGGING IN", error));
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput
          className="username"
          onChange={(e) => this.setState({username: e.target.value})}
          value={this.state.username}
          placeholder='Enter your username'
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          className="password"
          style={{borderColor: 'gray', borderWidth: 1}}
          onChange={(e) => this.setState({password: e.target.value})}
          placeholder='Enter your password'
        />

        <Button style={styles.submit} onPress={this.submit}
          title="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  submit: {
    paddingTop: 50
  }
});

const mapStoreToProps = ({auth}) => ({auth});
const mapDispatchToProps = (dispatch) => {
  return {
    userReceived: (user) => dispatch(userReceived(user))
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
