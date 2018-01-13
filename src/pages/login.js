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
    this.state = { username: '' };
  }

  submit = (e) => {

  }

  render() {
    console.log("USERNAME", this.state.username)
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput
          style={{borderColor: 'gray', borderWidth: 1}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder='Enter your username'
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          style={{borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
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
