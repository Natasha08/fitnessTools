import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>LOGIN PAGE</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')}
        title="Go Home" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
