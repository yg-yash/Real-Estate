import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import { StatusBar } from 'react-native';
import config from 'app/config/styles';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

function App() {
  const { isLoggedIn } = useSelector(state => state.loginReducer);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={config.color.COLOR_PRIMARY_ICON}
        barStyle="light-content"
      />
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
