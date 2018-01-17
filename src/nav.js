import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Text } from 'react-native';
import HomeScreen from './pages/home';
import Login from './pages/login';

const FoodScreen = () => {
  return (
    <View>
      <Text>
        I am a Food Screen
      </Text>
    </View>
  );
};

const WorkoutScreen = () => {
  return (
    <View>
      <Text>
        I am a workout Screen
      </Text>
    </View>
  );
};

const MoreScreen = () => {
  return (
    <View>
      <Text>
        I am a more Screen
      </Text>
    </View>
  );
};

const HomeScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.home}</FontAwesome>
    }
  },
  Eat: {
    screen: FoodScreen,
    navigationOptions: {
      title: 'Eat',
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.apple}</FontAwesome>
    }
  },
  Workout: {
    screen:  WorkoutScreen,
    navigationOptions: {
      title: 'Workout',
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.bicycle}</FontAwesome>
    }
  },
  Logout: {
    screen:  Login,
    navigationOptions: {
      tabBarLabel: 'Logout',
      title: 'Login',
      tabBarVisible: false,
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.signOut}</FontAwesome>
    }
  }
}, {
  tabBarOptions: {}
});

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Home: { screen: HomeScreenNavigator },
  Eat: {
    screen: FoodScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.apple}</FontAwesome>
    }
  }}
);

export default AppNavigator;
