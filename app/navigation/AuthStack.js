import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'app/screens/Login';
import Landing from '../screens/Landing';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Landing">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Landing" component={Landing} />
  </Stack.Navigator>
);

export default AuthStack;
