import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Icon, Button, Avatar } from 'react-native-elements';
import config from 'app/config/styles';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import house from 'app/assets/images/details/house.png';

const PropertyDetails = ({ navigation, route }) => {
  const [sheetOpened, setSheetOpened] = useState(false);
  const [entries] = useState([
    {
      title: 'Title 1',
    },
    {
      title: 'Title 1',
    },
    {
      title: 'Title 1',
    },
    {
      title: 'Title 1',
    },
  ]);

  const [activeSlide, setActiveSlide] = useState(0);
  const sheetRef = useRef();

  const toggleSheetOpened = () => setSheetOpened(value => !value);

  const renderSheetOpenContent = () => (
    <View style={{ flex: 0.7 }}>
      <ImageBackground
        source={{ uri: route.params.images[0].file }}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
        <Icon
          type="antdesign"
          name="left"
          color="white"
          containerStyle={{
            position: 'absolute',
            top: 20,
            left: 20,
          }}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
    </View>
  );

  const _renderItem = ({ item, index }) => {
    return (
      <ImageBackground
        source={{ uri: item.file }}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
        <View style={styles.slide}>
          <Icon
            type="antdesign"
            name="left"
            color="white"
            containerStyle={{
              position: 'absolute',
              top: 20,
              left: 20,
            }}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.outerhighlightCircle}>
            <View style={styles.outerwhiteCircle}>
              <View style={styles.outercolorCircle}>
                <Icon type="font-awesome" name="play" color="white" size={40} />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderContent = () => (
    <View style={styles.bottomSheet}>
      {sheetOpened ? (
        <Icon
          type="entypo"
          name="chevron-thin-down"
          size={40}
          color={config.color.COLOR_GREY_LABEL}
        />
      ) : (
        <Icon
          type="entypo"
          name="chevron-thin-up"
          size={40}
          color={config.color.COLOR_GREY_LABEL}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {!sheetOpened ? (
          <Text style={styles.dragText}>Drag up to see more details</Text>
        ) : null}
        <Text style={styles.propertyDetailsText}>Property Details</Text>
        <View style={styles.row}>
          <Text style={styles.propertyNameText}>{route.params.name}</Text>
          <Text style={styles.propertyPriceText}>
            $ {route.params.property[0].price}
          </Text>
        </View>
        <View>
          <View style={styles.iconRow}>
            <Icon
              type="font-awesome"
              name="bath"
              size={14}
              color={config.color.COLOR_PRIMARY_ICON}
            />
            <Text style={styles.itemName}>
              {route.params.property[0].bath} Baths
            </Text>
          </View>
          <View style={styles.iconRow}>
            <Icon
              type="font-awesome"
              name="bed"
              size={14}
              color={config.color.COLOR_PRIMARY_ICON}
            />
            <Text style={styles.itemName}>
              {route.params.property[0].beds} Beds
            </Text>
          </View>
          <View style={styles.iconRow}>
            <Icon
              type="font-awesome"
              name="home"
              size={14}
              color={config.color.COLOR_PRIMARY_ICON}
            />
            <Text style={styles.itemName}>
              {route.params.property[0].size} sqft
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Type:</Text>
            <Text style={styles.detailsItem}>
              {route.params.property[0].propertytype.toUpperCase()}
            </Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Style:</Text>
            <Text style={styles.detailsItem}>
              {route.params.property[0].storey
                ? route.params.property[0].storey
                : 'No Data'}
            </Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Size:</Text>
            <Text style={styles.detailsItem}>
              {route.params.property[0].size}
            </Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Lot Size:</Text>
            <Text style={styles.detailsItem}>
              {route.params.property[0].lotSize
                ? route.params.property[0].lotSize
                : 'No Data'}
            </Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Age:</Text>
            <Text style={styles.detailsItem}>No Data</Text>
          </View>
        </View>
        <Text style={styles.propertyDetailsText}>Description</Text>
        <Text style={styles.descriptionDetails}>
          {route.params.property[0].description}
        </Text>
        <Button
          title="Book a virtual tour"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          titleStyle={styles.btnTitle}
        />
        <Text style={styles.propertyDetailsText}>About the Seller</Text>
        <View style={styles.aboutContainer}>
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            size={120}
            containerStyle={styles.avatarContainer}
            rounded
          />
          <Text style={styles.username}>micheal_johnson</Text>
          <TouchableWithoutFeedback>
            <View style={styles.onlineButton}>
              <Text style={styles.onlineText}>• Online</Text>
            </View>
          </TouchableWithoutFeedback>
          <Button
            title="Contact Me"
            containerStyle={styles.contactMeBtnContainer}
            buttonStyle={styles.contactMeBtn}
            titleStyle={styles.contactMeTitle}
          />
        </View>
        <View style={styles.moreDetailsContainer}>
          <View style={styles.moreDetailsRow}>
            <Text style={styles.moreDetailsHeading}>From</Text>
            <Text style={styles.moreDetailsHeading}>Avg. Response Time</Text>
          </View>
          <View style={styles.moreDetailsRow}>
            <Text style={styles.moreDetailsBoldHeading}>Canada</Text>
            <Text style={styles.moreDetailsBoldHeading}>1 hour</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.moreDetailsPara}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Text>
        </View>
      </ScrollView>
    </View>
  );
  const getPagination = () => {
    return (
      <Pagination
        dotsLength={route.params.images.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          backgroundColor: 'white',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'white',
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={1}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {sheetOpened ? (
        renderSheetOpenContent()
      ) : (
        <View style={{ flex: 4 }}>
          {/* <ImageBackground
            source={house}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}> */}
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(117, 97, 255, 0.3)',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <Carousel
                // ref={c => {
                //   this._carousel = c;
                // }}
                data={route.params.images}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('screen').width}
                itemWidth={Dimensions.get('screen').width}
                activeDotIndex
                onSnapToItem={index => setActiveSlide(index)}
              />
              {getPagination()}
            </View>
          </View>
          {/* </ImageBackground> */}
        </View>
      )}
      <View style={{ flex: 1 }}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={['20%', '70%', '20%']}
          borderRadius={20}
          renderContent={renderContent}
          onOpenStart={() => {
            sheetRef.current.snapTo(1);
            toggleSheetOpened();
          }}
          onCloseStart={() => {
            sheetRef.current.snapTo(0);
            toggleSheetOpened();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PropertyDetails;
