import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Icon, Slider, Card } from 'react-native-elements';
import styles from './styles';
import { Picker } from '@react-native-community/picker';
import config from 'app/config/styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: 'Select City/Neighbourhoods',
    };
  }

  renderList = item => (
    <TouchableWithoutFeedback
      onPress={() => this.props.navigation.navigate('Property Details', item)}>
      <Card containerStyle={styles.card}>
        <View style={{ height: '100%' }}>
          <View style={{ height: '65%' }}>
            <ImageBackground
              source={require('app/assets/room.jpg')}
              style={{ height: '100%', width: '100%' }}
              resizeMode="cover">
              <View style={styles.directionIcon}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="directions"
                  size={23}
                  color="white"
                />
              </View>
            </ImageBackground>
          </View>
          <View style={{ padding: 10, marginTop: 5 }}>
            <View style={styles.row}>
              <Text style={styles.locationName}>{item.name}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
            <View style={styles.iconRow}>
              <View style={styles.smallIconContainer}>
                <Icon
                  type="font-awesome"
                  name="bath"
                  size={10}
                  color="#999999"
                />
                <Text style={styles.smallIconText}>{item.baths} Baths</Text>
              </View>
              <View style={styles.smallIconContainer}>
                <Icon
                  type="font-awesome"
                  name="bed"
                  size={10}
                  color="#999999"
                />
                <Text style={styles.smallIconText}>{item.beds} Beds</Text>
              </View>
              <View style={styles.smallIconContainer}>
                <Icon
                  type="font-awesome"
                  name="home"
                  size={10}
                  color="#999999"
                />
                <Text style={styles.smallIconText}>{item.baths} sqft</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon type="feather" name="menu" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Logo Here</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Filter')}>
            <Icon
              type="font-awesome"
              style={{ transform: [{ rotate: '90deg' }] }}
              name="sliders"
              color={config.color.COLOR_PRIMARY_ICON}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="City     |     Location     |      Type"
                style={styles.input}
              />
              <Icon
                type="font-awesome"
                name="search"
                size={18}
                style={styles.inputLogo}
                color="#999999"
              />
            </View>

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={styles.priceContainer}>Price Range</Text>
              <Slider
                maximumValue={50}
                minimumValue={20}
                step={1}
                minimumTrackTintColor="#e0e0e0"
                maximumTrackTintColor="#673ab7"
                trackStyle={{ height: 2 }}
                thumbStyle={styles.sliderThumb}
              />
              <View style={styles.row}>
                <Text style={styles.price}>$ 1500</Text>
                <Text style={styles.price}>$ 999999</Text>
              </View>
            </View>
            <View style={{ paddingHorizontal: 5, marginTop: 30 }}>
              <FlatList
                contentContainerStyle={{ paddingBottom: 10 }}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => this.renderList(item)}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;

const data = [
  {
    name: '43-6860 Glen Erin Drive',
    price: '$299,800',
    beds: '2',
    baths: '2',
    area: '1000',
  },
  {
    name: '43-6860 Glen Erin Drive',
    price: '$299,800',
    beds: '2',
    baths: '2',
    area: '1000',
  },
  {
    name: '43-6860 Glen Erin Drive',
    price: '$299,800',
    beds: '2',
    baths: '2',
    area: '1000',
  },
];
