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
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Slider, Card } from 'react-native-elements';
import { requestSearchProperty } from '../../actions/propertyActions';
import config from 'app/config/styles';

import styles from './styles';
const Home = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchValueError, setSearchValueError] = useState(false);

  const dispatch = useDispatch();

  const {
    loadingReducer: { isSearchLoading },
    propertyReducer: { searchedProperties },
  } = useSelector(state => state);

  const renderList = (item, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Property Details', item)}>
        <Card containerStyle={styles.card}>
          <View style={{ height: '100%' }}>
            <View style={{ height: '65%' }}>
              <ImageBackground
                // source={require('app/assets/room.jpg')}
                source={{ uri: item.images[0].file }}
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
                <Text style={styles.locationName}>asda</Text>
                <Text style={styles.priceText}>${item.property[0].price}</Text>
              </View>
              <View style={styles.iconRow}>
                <View style={styles.smallIconContainer}>
                  <Icon
                    type="font-awesome"
                    name="bath"
                    size={10}
                    color="#999999"
                  />
                  <Text style={styles.smallIconText}>
                    {item.property[0].bath} Baths
                  </Text>
                </View>
                <View style={styles.smallIconContainer}>
                  <Icon
                    type="font-awesome"
                    name="bed"
                    size={10}
                    color="#999999"
                  />
                  <Text style={styles.smallIconText}>
                    {item.property[0].beds} Beds
                  </Text>
                </View>
                <View style={styles.smallIconContainer}>
                  <Icon
                    type="font-awesome"
                    name="home"
                    size={10}
                    color="#999999"
                  />
                  <Text style={styles.smallIconText}>
                    {item.property[0].size} sqft
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  const searchProperties = () => {
    if (!searchValue) {
      setSearchValueError(true);
      return;
    }
    setSearchValueError(false);
    dispatch(requestSearchProperty(searchValue));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
              placeholder="City     |     Location     |      Type"
              style={styles.input}
              value={searchValue}
              onChangeText={text => setSearchValue(text)}
              onBlur={searchProperties}
            />
            <Icon
              type="font-awesome"
              name="search"
              size={18}
              style={styles.inputLogo}
              color="#999999"
            />
          </View>
          {searchValueError ? (
            <Text style={styles.errorText}>Search Value Can't Be Blank</Text>
          ) : null}
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
            {isSearchLoading ? (
              <ActivityIndicator
                size={50}
                color={config.color.COLOR_PRIMARY_ICON}
                style={{ marginTop: 50 }}
              />
            ) : (
              <FlatList
                contentContainerStyle={{ paddingBottom: 10 }}
                data={
                  searchedProperties.property.length === 0
                    ? []
                    : [searchedProperties]
                }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => renderList(item)}
                ListEmptyComponent={
                  <View style={styles.noFoundView}>
                    <Text style={styles.noPropertiesYet}>No Properties</Text>
                    <Text style={styles.trySearching}>Try Searching</Text>
                  </View>
                }
              />
            )}
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
