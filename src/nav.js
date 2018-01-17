import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Text } from 'react-native';

import NutritionScreen from './screens/nutrition';
import HomeScreen from './screens/home';
import Login from './screens/login';
import SavedFoods from './screens/saved_foods';

const WorkoutsScreen = () => {
  return (
    <View>
      <Text>
        I am a workout Screen
      </Text>
    </View>
  );
};

const DailyScreen = () => {
  return (
    <View>
      <Text>
        I am a Daily Screen
      </Text>
    </View>
  );
};

const Search = () => {
  return (
    <View>
      <Text>
        I am a Search Screen
      </Text>
    </View>
  );
};

const newFoodForm = () => {
  return (
    <View>
      <Text>
        I am a newFoodForm Screen
      </Text>
    </View>
  );
};

const NutritionScreenNavigator = TabNavigator({
  SavedFoods: {
    screen: SavedFoods,
    navigationOptions: {
      title: 'Saved Foods',
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.home}</FontAwesome>
    }
  },
  Daily: {
    screen: DailyScreen,
    navigationOptions: {
      title: 'Daily',
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.apple}</FontAwesome>
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
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
  Home: { screen: HomeScreen,
    navigationOptions: {
      title: 'Home'
    }},
  Nutrition: {
    screen: NutritionScreenNavigator
  },
  NewFood: {
    screen: newFoodForm,
    navigationOptions: {
      title: 'New Food'
    }
  },
  Workouts: {
    screen: WorkoutsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.apple}</FontAwesome>
    }
  }}
);

export default AppNavigator;
