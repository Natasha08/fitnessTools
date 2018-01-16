import { StackNavigator } from 'react-navigation';
import Home from './pages/home';
import Login from './pages/login';

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home }}
);

export default AppNavigator;
