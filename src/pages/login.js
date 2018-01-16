import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

import { loginUser, userReceived } from '../actions/auth';
import config from '../../config';

export class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  submit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { userReceived, navigation } = this.props;
    const url = config.API_HOST + '/api/token';

    return axios.post(url, { username: 'admin', password: 'asdf' })
    .then((response) => {
      userReceived(response.data);
      navigation.navigate('Home');
    })
    .catch((error) => console.log("ERROR LOGGING IN", error));
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput
          className="username"
          style={{borderColor: 'gray', borderWidth: 1}}
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

        <Button onPress={this.submit}
          title="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
});


const mapStoreToProps = ({auth}) => ({auth});
const mapDispatchToProps = (dispatch) => {
  return {
    userReceived: (user) => dispatch(userReceived(user))
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
