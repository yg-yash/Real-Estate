import React, { useState } from 'react';
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

const Home = ({ navigation }) => {
  const [languages, setlanguages] = useState('Select City/Neighbours');

  const renderList = item => (
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
              <Icon type="font-awesome" name="bath" size={10} color="#999999" />
              <Text style={styles.smallIconText}>{item.baths} Baths</Text>
            </View>
            <View style={styles.smallIconContainer}>
              <Icon type="font-awesome" name="bed" size={10} color="#999999" />
              <Text style={styles.smallIconText}>{item.beds} Beds</Text>
            </View>
            <View style={styles.smallIconContainer}>
              <Icon type="font-awesome" name="home" size={10} color="#999999" />
              <Text style={styles.smallIconText}>{item.baths} sqft</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon type="feather" name="menu" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Logo Here</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
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
              placeholder="Search the home you love..."
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
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={languages}
              style={styles.picker}
              mode="dropdown"
              itemStyle={{ fontSize: 5, borderRadius: 10 }}>
              <Picker.Item label="Select City/Neighbourhood" value="java" />
            </Picker>
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
          <View style={{ paddingHorizontal: 5 }}>
            <Text style={styles.propertyText}>Property Type</Text>
            <View style={[styles.row, { paddingHorizontal: 10 }]}>
              <TouchableWithoutFeedback>
                <Card containerStyle={styles.smallCard}>
                  <View style={styles.row}>
                    <Icon name="home" color={config.color.COLOR_PRIMARY_ICON} />
                    <Text style={styles.optionText}>Residential</Text>
                  </View>
                </Card>
              </TouchableWithoutFeedback>
              <Card containerStyle={styles.smallCard}>
                <View style={styles.row}>
                  <Icon type="font-awesome" name="building-o" color="#e0e0e0" />
                  <Text style={[styles.optionText, { color: '#999999' }]}>
                    Commercial
                  </Text>
                </View>
              </Card>
            </View>
            <FlatList
              contentContainerStyle={{ paddingBottom: 10 }}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => renderList(item)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
