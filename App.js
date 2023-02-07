/* eslint-disable no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/redux/store';
import Home from './src/screens/Home';
import ShoppingCart from './src/screens/ShoppingCart';
import OrderPlaced from './src/screens/OrderPlaced';

const App = () => {
  const linking = {
    prefixes: ['bookstore://app', 'https://www.example.com'],
    config: {
      screens: {
        Home: 'homescreen',
        ShoppingCart: 'cartscreen',
        OrderPlaced: 'orderscreen',
      },
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
