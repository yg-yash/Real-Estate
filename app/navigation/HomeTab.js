import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CustomTab from './Customtab';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomTab {...props} />}
      tabBarOptions={{
        style: {
          height: 40,
        },
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Bookmarks" component={Home} />
      <Tabs.Screen name="Messages" component={Home} />
      <Tabs.Screen name="Settings" component={Home} />
    </Tabs.Navigator>
  );
};

export default MainTabs;
