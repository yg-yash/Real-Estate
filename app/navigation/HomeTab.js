import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Appointments from 'app/screens/Appointments';
import Messages from 'app/screens/Messages';
import UploadProperty from 'app/screens/UploadProperty';
import Account from 'app/screens/Account';

import CustomTab from './Customtab';
import { useSelector } from 'react-redux';
const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const { userType } = useSelector(state => state.userReducer);
  console.log(userType);
  return (
    <Tabs.Navigator
      tabBar={props => <CustomTab {...props} />}
      tabBarOptions={{
        style: {
          height: 40,
        },
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Appointments" component={Appointments} />
      {userType === 'Seller' && (
        <Tabs.Screen name="Add" component={UploadProperty} />
      )}

      <Tabs.Screen name="Messages" component={Messages} />

      <Tabs.Screen name="Account" component={Account} />
    </Tabs.Navigator>
  );
};

export default MainTabs;
