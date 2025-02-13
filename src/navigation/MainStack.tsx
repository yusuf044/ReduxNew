import React from 'react';

import OrdersScreen from '../screens/OrdersScreen';
import FoodScreen from '../screens/FoodScreen';
import NewOrderScreen from '../screens/NewOrderScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FoodScreen" component={FoodScreen} />
      <Stack.Screen name="NewOrder" component={NewOrderScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
