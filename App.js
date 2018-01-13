import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME PAGE</Text>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: Home }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
