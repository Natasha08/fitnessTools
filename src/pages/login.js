import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  submit = (e) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput
          className='username'
          style={{borderColor: 'gray', borderWidth: 1}}
          onChange={(e) => this.setState({username: e.target.value})}
          value={this.state.username}
          ref='username'
          placeholder='Enter your username'
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          className='password'
          style={{borderColor: 'gray', borderWidth: 1}}
          onChange={(e) => this.setState({password: e.target.value})}
          ref='password'
          placeholder='Enter your password'
        />

        <Button onPress={() => this.submit()}
          title="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

AppRegistry.registerComponent('fitnessTools', () => Login);
