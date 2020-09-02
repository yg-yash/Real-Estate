import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import MainDrawer from './MainDrawer';
import Login from 'app/screens/Login';
import Landing from '../screens/Landing';
import ProprtyDetails from 'app/screens/PropertyDetails';
import { StatusBar } from 'react-native';
import config from 'app/config/styles';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={config.color.COLOR_PRIMARY_ICON}
        barStyle="light-content"
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Landing">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={MainDrawer} />
        <Stack.Screen name="Property Details" component={ProprtyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
