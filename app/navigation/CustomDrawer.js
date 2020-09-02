import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import config from 'app/config/styles';
import * as loginActions from 'app/actions/loginActions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.backIcon}>
          <Icon
            type="antdesign"
            name="close"
            size={12}
            color="#651fff"
            raised
            style={{ alignSelf: 'flex-start' }}
            onPress={() => props.navigation.closeDrawer()}
          />
          <Text style={styles.menu}>Menu</Text>
          <Text>{'   '}</Text>
        </View>
        <View style={{ flex: 1, marginTop: 40, paddingLeft: 16 }}>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('My Profile');
              }}
              style={styles.itemTouchable}>
              <Icon type="entypo" name="location" size={17} color="white" />
              <Text style={styles.itemLabel}>Location</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Notifications');
              }}
              style={styles.itemTouchable}>
              <Icon
                type="font-awesome"
                name="user-circle"
                size={17}
                color="white"
              />
              <Text style={styles.itemLabel}>Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => props.navigation.navigate('My Orders')}>
              <Icon type="antdesign" name="mail" size={17} color="white" />
              <Text style={styles.itemLabel}>Contact Us</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('History');
              }}
              style={styles.itemTouchable}>
              <MaterialCommunityIcons
                name="lightbulb-on"
                size={18}
                color="white"
              />
              <Text style={styles.itemLabel}>Help improve the app</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.itemContainer]}>
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => props.navigation.navigate('How To Use')}>
              <Icon
                type="font-awesome"
                name="share-alt"
                size={17}
                color="white"
              />
              <Text style={styles.itemLabel}>Share App</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.itemContainer]}>
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => props.navigation.navigate('Payment Add')}>
              <Icon
                type="font-awesome"
                name="share-alt"
                size={17}
                color="white"
              />
              <Text style={styles.itemLabel}>Payment Add</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.itemContainer]}>
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => props.navigation.navigate('Payment Details')}>
              <Icon
                type="font-awesome"
                name="share-alt"
                size={17}
                color="white"
              />
              <Text style={styles.itemLabel}>Payment Details</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.itemContainer]}>
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => props.navigation.navigate('Seller Homepage')}>
              <Icon
                type="font-awesome"
                name="share-alt"
                size={17}
                color="white"
              />
              <Text style={styles.itemLabel}>Seller Homepage</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 0.3,
              borderColor: 'white',
              marginHorizontal: 30,
              marginTop: 30,
            }}
          />
          <View style={[styles.itemContainer]}>
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => props.navigation.navigate('How To Use')}>
              <Text style={styles.smallLabel}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.itemContainer]}>
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() => props.navigation.navigate('How To Use')}>
              <Text style={styles.smallLabel}>Terms of Services</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <Icon type="antdesign" name="logout" color="white" size={17} />
            <TouchableOpacity>
              <Text style={styles.bottomText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 220,
    backgroundColor: config.color.COLOR_PRIMARY_ICON,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backIcon: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    // marginLeft: 130,

    textTransform: 'uppercase',
  },
  avatarContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiText: {
    marginVertical: 15,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: config.fonts.FONT_SEMI_BOLD,
    color: 'white',
    flex: 1,

    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: config.fonts.FONT_SEMI_BOLD,
    color: 'white',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  itemContainer: {
    marginTop: 10,
    padding: 15,
    paddingHorizontal: 20,
  },
  itemTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 15,
    lineHeight: 19,
    color: 'white',
    fontFamily: config.fonts.FONT_REGULAR,
    marginLeft: 15,
  },
  smallLabel: {
    fontSize: 14,
    lineHeight: 18,
    color: 'white',
    fontFamily: config.fonts.FONT_REGULAR,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    height: 23,
    width: 2,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  editIcon: { alignSelf: 'flex-end', marginRight: 20 },
  bottomText: {
    fontSize: 18,
    lineHeight: 25,
    color: 'white',
    fontFamily: config.fonts.FONT_REGULAR,
    marginLeft: 10,
  },
});
