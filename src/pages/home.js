import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>HOME PAGE</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')}
        title="Go to Login" />
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
