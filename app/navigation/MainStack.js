import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProprtyDetails from 'app/screens/PropertyDetails';
import MainDrawer from './MainDrawer';
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={MainDrawer} />
    <Stack.Screen name="Property Details" component={ProprtyDetails} />
  </Stack.Navigator>
);
