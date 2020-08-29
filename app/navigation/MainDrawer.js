import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './HomeTab';
import CustomDrawerContent from './CustomDrawer';
import Filter from 'app/screens/Filter';
import PaymentAdd from 'app/screens/PaymentAdd';
import PaymentDetails from 'app/screens/PaymentDetails';
import SellerHomePage from 'app/screens/SellerHomePage';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: '100%' }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Filter" component={Filter} />
      <Drawer.Screen name="Payment Add" component={PaymentAdd} />
      <Drawer.Screen name="Payment Details" component={PaymentDetails} />
      <Drawer.Screen name="Seller Homepage" component={SellerHomePage} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
