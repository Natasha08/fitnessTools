import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Text } from 'react-native';

import NutritionScreen from './screens/nutrition';
import HomeScreen from './screens/home';
import Login from './screens/login';
import SavedFoods from './screens/saved_foods';
import NewFoodForm from './screens/new_food';

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

const Drawer = () => (
  <View>
    <Text>
      I am a Drawer
    </Text>
  </View>
);
const DrawerStack = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Home',
      headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
  },
  Nutrition: {
    screen: NutritionScreenNavigator,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Nutrition',
      headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
  }
});

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Home: { screen: DrawerStack },
  Nutrition: {
    screen: NutritionScreenNavigator
  },
  NewFood: {
    screen: NewFoodForm,
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
