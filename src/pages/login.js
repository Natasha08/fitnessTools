import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios';

export class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  submit = (e) => {
    // create an api.js w/ axios methods
    // create thunk actions and move the logic below to an actions
    // set the url to something better
    // remove the password from state and deal w/ it another way
    // move styles to its own folder

    return axios.post('https://mycolofitness.herokuapp.com/api/token', {
      username: 'admin',
      password: 'password'
    })
    .then(response => {
      // console.log("RESPONSE", response);
    })
    .catch(error => {
      // console.log("ERROR", error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput
          style={{borderColor: 'gray', borderWidth: 1}}
          onChange={(e) => this.setState({username: e.target.value})}
          value={this.state.username}
          placeholder='Enter your username'
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          style={{borderColor: 'gray', borderWidth: 1}}
          onChange={(e) => this.setState({password: e.target.value})}
          placeholder='Enter your password'
        />

        <Button onPress={this.submit()}
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


const mapStoreToProps = ({auth}) => ({auth});
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data))
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
