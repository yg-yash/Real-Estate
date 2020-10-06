import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { Header, Icon, Card, Button } from 'react-native-elements';
import styles from './styles';
import config from 'app/config/styles';
import ImagePicker from 'react-native-image-picker';
import * as propertyActions from 'app/actions/propertyActions';
import { useSelector, useDispatch } from 'react-redux';

// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

const UploadProperty = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [roomsList, setRoomsList] = useState([1, 2, 3, 4, 5]);
  const [bathsList, setBathsList] = useState([1, 2, 3, 4, 5]);
  const [propertyTypes, setPropertyTypes] = useState([
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
  ]);
  const [selectedProperty, setSelectedProperty] = useState('Townhouse');
  const [selectedRoom, setSelectedRoom] = useState(1);
  const [selectedBaths, setSelectedBaths] = useState(1);
  const [imagesToShow, setImagesToShow] = useState([]);
  const [images, setImages] = useState([]);
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);
  const [imagesError, setImagesError] = useState('');
  const dispatch = useDispatch();
  const {
    loadingReducer: { isUploadingPropertyLoading },
    propertyReducer: { uploadPropertyError },
  } = useSelector(mystate => mystate);

  const isrequired = () => {
    const newArr = [
      addressOne,
      addressTwo,
      city,
      state,
      zipCode,
      price,
      size,
      description,
    ].map((item, index) => ({ name: index, isrequired: !item }));
    setErrors(newArr);
    const value = newArr.find(item => item.isrequired === true);
    return value ? true : false;
  };

  const uploadImage = () => {
    ImagePicker.showImagePicker({}, response => {
      //      console.log('Response = ', response);

      if (response.didCancel) {
        //      console.log('User cancelled image picker');
      } else if (response.error) {
        //  console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //    console.log('User tapped custom button: ', response.customButton);
      } else {
        const image = { uri: response.uri };

        setImages(value => [...value, response.data]);
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImagesToShow(value => [...value, source]);
        setImagesError('');
      }
    });
  };

  const renderCities = item => (
    <Card containerStyle={styles.item}>
      <View style={styles.row}>
        <Text style={styles.itemText}>{item}</Text>
        <Icon type="antdesign" name="close" color="white" size={15} />
      </View>
    </Card>
  );
  const renderRooms = item =>
    item === selectedRoom ? (
      <Card containerStyle={styles.roomItem} key={item}>
        <View style={styles.row}>
          <Text style={styles.itemText}>{item}</Text>
          <Icon type="antdesign" name="plus" color="white" size={15} />
        </View>
      </Card>
    ) : (
      <TouchableWithoutFeedback
        onPress={() => setSelectedRoom(item)}
        key={item}>
        <Card containerStyle={styles.roomItemUnselected} key={item}>
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
      </TouchableWithoutFeedback>
    );
  const renderBaths = item =>
    item === selectedBaths ? (
      <Card containerStyle={styles.roomItem} key={item}>
        <View style={styles.row}>
          <Text style={styles.itemText}>{item}</Text>
          <Icon type="antdesign" name="plus" color="white" size={15} />
        </View>
      </Card>
    ) : (
      <TouchableWithoutFeedback
        onPress={() => setSelectedBaths(item)}
        key={item}>
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
      </TouchableWithoutFeedback>
    );

  const imageRequired = () => {
    if (images.length < 1) {
      setImagesError('Images are required');
      return true;
    }
    setImagesError('');
    return false;
  };

  const onSubmit = _ => {
    if (imageRequired() || isrequired()) {
      return;
    }

    dispatch(
      propertyActions.requestPropertyUpload(
        addressOne,
        addressTwo,
        city,
        state,
        zipCode,
        price,
        selectedRoom,
        selectedBaths,
        size,
        description,
        images,
      ),
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        containerStyle={styles.headerContainer}
        leftComponent={
          <Icon
            type="antdesign"
            name="left"
            color="white"
            onPress={() => navigation.goBack()}
          />
        }
        centerComponent={
          <Text style={styles.headerTitle}>Add New Listing</Text>
        }
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* <View>
            <Text style={styles.headingText}>Add Drone Footage</Text>
            <Card containerStyle={styles.greyCard}>
              <Icon
                type="octicons"
                name="cloud-upload"
                color="white"
                size={50}
              />
              <Button
                title="Upload Video"
                buttonStyle={styles.uploadBtn}
                titleStyle={styles.uploadBtnTitle}
              />
            </Card>
          </View> */}
          <View>
            <Text style={styles.headingText}>Add Images</Text>
            <FlatList
              data={imagesToShow}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Card containerStyle={styles.imageCard}>
                  <Image
                    source={item}
                    resizeMode="cover"
                    style={{ height: '100%', width: '100%' }}
                  />
                </Card>
              )}
              ListFooterComponent={
                <TouchableWithoutFeedback onPress={uploadImage}>
                  <View style={[styles.imageCard, styles.footerImageCard]}>
                    <Icon
                      name="add-circle-outline"
                      type="ionicons"
                      size={30}
                      color={config.color.COLOR_PRIMARY_ICON}
                    />
                    <Text style={styles.addPhotoText}>Add photo</Text>
                  </View>
                </TouchableWithoutFeedback>
              }
            />
          </View>
          {imagesError ? (
            <Text style={styles.errorText}>{imagesError}</Text>
          ) : null}

          <View>
            <Text style={styles.headingText}>Property Type</Text>
            <FlatList
              data={propertyTypes}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingBottom: 10 }}
              renderItem={({ item, index }) =>
                selectedProperty.toLowerCase() === item.name.toLowerCase() ? (
                  <Card containerStyle={styles.smallCard}>
                    <Icon
                      type="font-awesome"
                      name={item.icon}
                      color={config.color.COLOR_PRIMARY_ICON}
                    />
                    <Text style={styles.optionText}>{item.name}</Text>
                  </Card>
                ) : (
                  <TouchableWithoutFeedback
                    onPress={() => setSelectedProperty(item.name)}>
                    <Card containerStyle={styles.smallCardunselected}>
                      <Icon
                        type="font-awesome"
                        name={item.icon}
                        color="#999999"
                      />
                      <Text style={[styles.optionText, { color: '#999999' }]}>
                        {item.name}
                      </Text>
                    </Card>
                  </TouchableWithoutFeedback>
                )
              }
            />
          </View>
          <View>
            <Text style={styles.headingText}>Address 1</Text>
            <TextInput
              style={styles.input}
              multiline
              value={addressOne}
              onChangeText={value => setAddressOne(value)}
              onEndEditing={isrequired}
            />
          </View>
          {errors.length > 0 && errors[0].isrequired && (
            <Text style={styles.errorText}>Address One is required</Text>
          )}
          <View>
            <Text style={styles.headingText}>Address 2</Text>
            <TextInput
              style={styles.input}
              multiline
              value={addressTwo}
              onChangeText={value => setAddressTwo(value)}
              onEndEditing={isrequired}
            />
            {errors.length > 0 && errors[1].isrequired && (
              <Text style={styles.errorText}>Address Two is required</Text>
            )}
          </View>

          <View>
            <Text style={styles.headingText}>Bedrooms</Text>
            <View style={styles.row}>
              {roomsList.map((item, index) => renderRooms(item, index))}
            </View>
          </View>
          <View>
            <Text style={styles.headingText}>Baths</Text>
            <View style={styles.row}>
              {bathsList.map((item, index) => renderBaths(item, index))}
            </View>
          </View>

          <View>
            {/* <Text style={styles.headingText}>Select City</Text> */}

            {/* <FlatList
                horizontal
                data={cityList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => renderCities(item, index)}
                contentContainerStyle={{ paddingBottom: 10 }}
                ListFooterComponent={
                  <View style={styles.addContainer}>
                    <Icon
                      type="antdesign"
                      name="plus"
                      size={15}
                      color={config.color.COLOR_PRIMARY_ICON}
                    />
                    <Text style={styles.addText}>Add Your City</Text>
                  </View>
                }
              /> */}
            <Text style={styles.headingText}>City</Text>
            <TextInput
              style={[styles.priceInput, { marginLeft: 0 }]}
              value={city}
              onChangeText={value => setCity(value)}
              onEndEditing={isrequired}
            />
          </View>
          {errors.length > 0 && errors[2].isrequired && (
            <Text style={styles.errorText}>City is required</Text>
          )}
          {/* <Text style={styles.headingText}>Neighbourhoods</Text>
            <View style={styles.row}>
              <FlatList
                horizontal
                data={cityList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => renderCities(item, index)}
                contentContainerStyle={{ paddingBottom: 10 }}
                ListFooterComponent={
                  <View style={styles.addContainer}>
                    <Icon
                      type="antdesign"
                      name="plus"
                      size={15}
                      color={config.color.COLOR_PRIMARY_ICON}
                    />
                    <Text style={styles.addText}>Add Neighbourds</Text>
                  </View>
                }
              />
            </View> */}
          <View>
            <Text style={styles.headingText}>State</Text>
            <TextInput
              style={[styles.priceInput, { marginLeft: 0 }]}
              value={state}
              onChangeText={value => setState(value)}
              onEndEditing={isrequired}
            />
          </View>
          {errors.length > 0 && errors[3].isrequired && (
            <Text style={styles.errorText}>State is required</Text>
          )}
          <View>
            <Text style={styles.headingText}>Zip Code</Text>
            <TextInput
              style={[styles.priceInput, { marginLeft: 0 }]}
              value={zipCode}
              onChangeText={value => setZipCode(value)}
              onEndEditing={isrequired}
              keyboardType="number-pad"
            />
          </View>
          {errors.length > 0 && errors[4].isrequired && (
            <Text style={styles.errorText}>ZipCode is required</Text>
          )}
          <View>
            <Text style={styles.headingText}>Price</Text>

            <View style={[styles.row, { justifyContent: 'flex-start' }]}>
              <Text style={styles.dollarText}>$</Text>
              <TextInput
                style={styles.priceInput}
                value={price}
                onChangeText={value => setPrice(value)}
                onEndEditing={isrequired}
                keyboardType="number-pad"
              />
            </View>
          </View>
          {errors.length > 0 && errors[5].isrequired && (
            <Text style={styles.errorText}>Price is required</Text>
          )}
          <View>
            <Text style={styles.headingText}>Size</Text>
            <TextInput
              style={[styles.priceInput, { marginLeft: 0 }]}
              value={size}
              onChangeText={value => setSize(value)}
              onEndEditing={isrequired}
              keyboardType="number-pad"
            />
          </View>
          {errors.length > 0 && errors[6].isrequired && (
            <Text style={styles.errorText}>Size is required</Text>
          )}
          <View>
            <Text style={styles.headingText}>Property Description</Text>
            <TextInput
              style={styles.descriptionInput}
              value={description}
              multiline
              onChangeText={value => setDescription(value)}
              onEndEditing={isrequired}
            />
          </View>
          {errors.length > 0 && errors[7].isrequired && (
            <Text style={styles.errorText}>Description is required</Text>
          )}
          {uploadPropertyError ? (
            <Text
              style={[
                styles.errorText,
                {
                  textAlign: 'center',
                  marginTop: 20,
                  fontSize: 19,
                  lineHeight: 23,
                },
              ]}>
              {uploadPropertyError}
            </Text>
          ) : null}

          <Button
            title="Upload Property"
            containerStyle={styles.btnContainer}
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btn}
            onPress={onSubmit}
            loading={isUploadingPropertyLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadProperty;
