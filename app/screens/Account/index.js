import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header, Icon, Card, Slider, Button } from 'react-native-elements';
import styles from './styles';
import config from 'app/config/styles';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: ['Toronto'],
      selectedCity: 'Toronto',
      roomsList: [1, 2, 3, 4, 5],
      propertyTypes: [
        {
          name: 'Townhouse',
          icon: 'home',
        },
        {
          name: 'Condo',
          icon: 'building-o',
        },
        {
          name: 'Apartment',
          icon: 'building-o',
        },
        {
          name: 'House',
          icon: 'building-o',
        },
      ],
      selectedProperty: 'Townhouse',
    };
  }
  renderCities = item => (
    <Card containerStyle={styles.item}>
      <View style={styles.row}>
        <Text style={styles.itemText}>{item}</Text>
        <Icon type="antdesign" name="close" color="white" size={15} />
      </View>
    </Card>
  );
  renderRooms = item =>
    item === 1 ? (
      <Card containerStyle={styles.roomItem}>
        <View style={styles.row}>
          <Text style={styles.itemText}>{item}</Text>
          <Icon type="antdesign" name="plus" color="white" size={15} />
        </View>
      </Card>
    ) : (
      <Card containerStyle={styles.roomItemUnselected}>
        <View style={styles.row}>
          <Text style={styles.itemunselectedText}>{item}</Text>
          <Icon
            type="antdesign"
            name="plus"
            color={config.color.COLOR_PRIMARY_ICON}
            size={10}
          />
        </View>
      </Card>
    );

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          containerStyle={styles.headerContainer}
          leftComponent={<Icon type="feather" name="menu" color="white" />}
          rightComponent={
            <Icon
              type="font-awesome"
              style={{ transform: [{ rotate: '90deg' }] }}
              name="sliders"
              color="white"
            />
          }
          centerComponent={<Text style={styles.headerTitle}>LOGO HERE</Text>}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.topCard}>
            <Text>Welcome Back</Text>
            <Text>Vikhyat Shetty</Text>
          </View>

          <View style={styles.container}>
            <Text>Overview</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 150,
              }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#f75b9e', '#fa6f9b', '#fc95a6']}
                style={{
                  //   width: 150,
                  //   height: 150,
                  borderRadius: 10,
                  flex: 1,
                }}>
                <Text>asd</Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#f75b9e', '#fa6f9b', '#fc95a6']}
                style={{
                  //   width: 150,
                  //   height: 150,
                  borderRadius: 10,
                  flex: 1,
                }}>
                <Text>asd</Text>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Filter;
