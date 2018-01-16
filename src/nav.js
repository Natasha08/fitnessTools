import { StackNavigator } from 'react-navigation';
import Home from './pages/home';
import Login from './pages/login';

const AppNavigator = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login }}
);

export default AppNavigator;
