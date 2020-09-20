import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import config from 'app/config/styles';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabs}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              {label === 'Home' && (
                <View style={{ alignItems: 'center' }}>
                  <Icon
                    type="feather"
                    name="home"
                    size={20}
                    color={
                      isFocused ? config.color.COLOR_PRIMARY_ICON : '#D3D3D3'
                    }
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: isFocused
                        ? config.color.COLOR_PRIMARY_ICON
                        : '#D3D3D3',
                    }}>
                    Home
                  </Text>
                </View>
              )}
              {label === 'Appointments' && (
                <View style={{ alignItems: 'center' }}>
                  <MaterialCommunityIcons
                    name="clock-fast"
                    size={23}
                    color={
                      isFocused ? config.color.COLOR_PRIMARY_ICON : '#D3D3D3'
                    }
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: isFocused
                        ? config.color.COLOR_PRIMARY_ICON
                        : '#D3D3D3',
                    }}>
                    Appointments
                  </Text>
                </View>
              )}
              {label === 'Add' && (
                <Icon
                  containerStyle={{
                    position: 'absolute',
                    bottom: -5,
                    borderRadius: 68,
                    width: 55,
                    height: 55,
                    borderWidth: 3,
                    borderColor: 'white',
                    backgroundColor: config.color.COLOR_PRIMARY_ICON,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  type="antdesign"
                  name="plus"
                  size={25}
                  color="white"
                />
              )}

              {label === 'Messages' && (
                <View style={{ alignItems: 'center' }}>
                  <Icon
                    type="antdesign"
                    name="message1"
                    size={20}
                    color={
                      isFocused ? config.color.COLOR_PRIMARY_ICON : '#D3D3D3'
                    }
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: isFocused
                        ? config.color.COLOR_PRIMARY_ICON
                        : '#D3D3D3',
                    }}>
                    Messages
                  </Text>
                </View>
              )}
              {label === 'Account' && (
                <View style={{ alignItems: 'center' }}>
                  <Icon
                    type="font-awesome"
                    name="user-o"
                    size={20}
                    color={
                      isFocused ? config.color.COLOR_PRIMARY_ICON : '#D3D3D3'
                    }
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: isFocused
                        ? config.color.COLOR_PRIMARY_ICON
                        : '#D3D3D3',
                    }}>
                    Account
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    height: 60,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 5,
  },
});
