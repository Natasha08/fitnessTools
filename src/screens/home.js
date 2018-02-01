import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Login from './login';
import styles from '../styles/main';

export default class Home extends React.Component {
  navigate = (path) => {
    return (e) => {
      this.props.navigation.navigate(path);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={ styles.text }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            feugiat tellus, vitae facilisis sem. In ipsum sem, sagittis ac mattis
            eget, vestibulum at erat. Vestibulum maximus urna vitae arcu vestibulum,
            sed ullamcorper nibh accumsan. Aenean sapien magna, ultricies quis lacus
          </Text>
          <Button style={styles.submit} onPress={this.navigate('Nutrition')}
            title="Nutrition" />
          <Text style={ styles.text }>
            luctus, viverra varius sapien. Cras egestas orci at auctor ullamcorper.
            Praesent ac sem id leo sodales tincidunt quis non mauris. Pellentesque
            porta cursus erat, ac condimentum nisi egestas eget. Nullam sit amet elit
            fringilla, luctus purus ut, blandit risus. Maecenas dapibus dui nisi, nec
            vestibulum sapien porttitor at. Aenean dictum in leo ac vehicula.
          </Text>
          <Button style={styles.submit} onPress={this.navigate('Workouts')}
            title="Workouts" />
          <Text style={ styles.text }>
            Quisque laoreet dictum nulla, placerat rutrum lacus dictum sit amet.
            Vivamus at quam ut leo consectetur iaculis. In euismod nisl non neque
            dictum vehicula. Pellentesque sollicitudin enim nisi. Quisque sit amet
            consectetur quam. Etiam id dui eget neque cursus faucibus at vitae mauris.
            Phasellus suscipit scelerisque fringilla. Maecenas ut metus ornare, vestibulum
            turpis vitae, scelerisque dui.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
