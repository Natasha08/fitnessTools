import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Text } from 'react-native';

import NutritionScreen from './screens/nutrition';
import HomeScreen from './screens/home';
import Login from './screens/login';

const WorkoutsScreen = () => {
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



const SavedFoods = () => {
  return (
    <View>
      <Text>
        I am a SavedFoods Screen
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

const Workouts = () => {
  return (
    <View>
      <Text>
        I am a Workouts Screen
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
    screen:  Search,
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
    screen: NutritionScreenNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.apple}</FontAwesome>
    }
  },
  Workouts: {
    screen: Workouts,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome>{Icons.apple}</FontAwesome>
    }
  }}
);

export default AppNavigator;
