import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './HomeTab';
import CustomDrawerContent from './CustomDrawer';
import Filter from 'app/screens/Filter';
import PaymentAdd from 'app/screens/PaymentAdd';
import PaymentDetails from 'app/screens/PaymentDetails';
import UploadProprty from 'app/screens/UploadProperty';
import Messages from 'app/screens/Messages';
import Appointments from 'app/screens/Appointments';
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
      <Drawer.Screen name="Upload Property" component={UploadProprty} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
