import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
},
{
  initialRouteName: 'Home'
}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
