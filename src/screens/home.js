import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Login from './login';

export default class Home extends React.Component {
  navigate = (path) => {
    return (e) => {
      this.props.navigation.navigate(path);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            feugiat tellus, vitae facilisis sem. In ipsum sem, sagittis ac mattis
            eget, vestibulum at erat. Vestibulum maximus urna vitae arcu vestibulum,
            sed ullamcorper nibh accumsan. Aenean sapien magna, ultricies quis lacus
          </Text>
          <Button style={styles.submit} onPress={this.navigate('Nutrition')}
            title="Nutrition" />
          <Text>
            luctus, viverra varius sapien. Cras egestas orci at auctor ullamcorper.
            Praesent ac sem id leo sodales tincidunt quis non mauris. Pellentesque
            porta cursus erat, ac condimentum nisi egestas eget. Nullam sit amet elit
            fringilla, luctus purus ut, blandit risus. Maecenas dapibus dui nisi, nec
            vestibulum sapien porttitor at. Aenean dictum in leo ac vehicula.
          </Text>
          <Button style={styles.submit} onPress={this.navigate('Workouts')}
            title="Workouts" />
          <Text>
            Quisque laoreet dictum nulla, placerat rutrum lacus dictum sit amet.
            Vivamus at quam ut leo consectetur iaculis. In euismod nisl non neque
            dictum vehicula. Pellentesque sollicitudin enim nisi. Quisque sit amet
            consectetur quam. Etiam id dui eget neque cursus faucibus at vitae mauris.
            Phasellus suscipit scelerisque fringilla. Maecenas ut metus ornare, vestibulum
            turpis vitae, scelerisque dui.
          </Text>
          <Text>
            Praesent pharetra elementum nulla et condimentum. Praesent pharetra erat
            et mi eleifend sollicitudin. Sed finibus pretium magna. Nam eu vehicula
          </Text>
          <Text>
            risus. Proin ut tincidunt dolor. Phasellus gravida, libero eu aliquam
            pharetra, odio turpis ornare turpis, eu commodo nibh leo ac est. Sed vel
            porta felis, tincidunt porta ante. Nunc id lorem porttitor, faucibus sem
            cursus, auctor nisl. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vivamus sit amet mollis sapien.
            Sed pharetra metus eget metus porta pulvinar. Aliquam eget pulvinar elit.
          </Text>
          <Text>
            Mauris eu gravida purus, condimentum finibus libero. Aliquam egestas
            convallis diam, quis finibus nibh. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Nulla ultricies
            vehicula neque. Sed ullamcorper quam id urna commodo, eu vestibulum
            tellus lobortis. Praesent ac est quis urna varius vehicula. In et nunc
            nulla. Suspendisse potenti. Morbi tempor augue in tempus pretium. Nunc
            sit amet auctor ex. Proin quis auctor ante. Maecenas auctor tristique
            leo ac porttitor. Phasellus venenatis iaculis dictum. Aenean in dolor
            imperdiet, iaculis eros at, malesuada nunc.
          </Text>
          <Text>
            Curabitur interdum egestas dolor, in finibus nulla dapibus nec.
            Vestibulum lacus nisl, tempus non sollicitudin vel, pretium ut ante.
            Morbi nec mauris varius, tempus ligula at, suscipit eros. Maecenas
            posuere felis ipsum, a luctus est vulputate et. Nunc congue placerat
            sapien, in congue magna gravida sit amet. Donec consectetur ipsum in
            mollis finibus. Aenean et molestie sem. In vel velit risus. Proin
            lobortis nunc sit amet ante egestas, et sollicitudin lorem condimentum.
          </Text>
        </ScrollView>
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
    padding: 10
  },
});
