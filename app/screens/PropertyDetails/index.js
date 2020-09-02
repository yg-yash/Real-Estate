import React, { Component } from 'react';
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
import purpleBg from 'app/assets/images/details/purpleBg.png';
import house from 'app/assets/images/details/house.png';

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetOpened: false,
      entries: [
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
      ],
      activeSlide: 0,
    };
    this.sheetRef = React.createRef();
  }

  toggleSheetOpened = () =>
    this.setState(prevState => ({ sheetOpened: !prevState.sheetOpened }));

  renderSheetOpenContent = () => (
    <View style={{ flex: 0.7 }}>
      <ImageBackground
        source={house}
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
          onPress={() => this.props.navigation.goBack()}
        />
      </ImageBackground>
    </View>
  );

  _renderItem = ({ item, index }) => {
    return (
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
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.outerhighlightCircle}>
          <View style={styles.outerwhiteCircle}>
            <View style={styles.outercolorCircle}>
              <Icon type="font-awesome" name="play" color="white" size={40} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderContent = () => (
    <View style={styles.bottomSheet}>
      {this.state.sheetOpened ? (
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
        {!this.state.sheetOpened ? (
          <Text style={styles.dragText}>Drag up to see more details</Text>
        ) : null}
        <Text style={styles.propertyDetailsText}>Property Details</Text>
        <View style={styles.row}>
          <Text style={styles.propertyNameText}>
            {this.props.route.params.name}
          </Text>
          <Text style={styles.propertyPriceText}>
            {this.props.route.params.price}
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
              {this.props.route.params.baths} Baths
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
              {this.props.route.params.beds} Beds
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
              {this.props.route.params.area} sqft
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Type:</Text>
            <Text style={styles.detailsItem}>Att/Row/Townhouse</Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Style:</Text>
            <Text style={styles.detailsItem}>2 1/2 Storey</Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Size:</Text>
            <Text style={styles.detailsItem}>No Data</Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Lot Size:</Text>
            <Text style={styles.detailsItem}>1.5 x 123 Feet</Text>
          </View>
          <View style={styles.detailsItemRow}>
            <Text style={styles.detailsItemBold}>Age:</Text>
            <Text style={styles.detailsItem}>No Data</Text>
          </View>
        </View>
        <Text style={styles.propertyDetailsText}>Description</Text>
        <Text style={styles.descriptionDetails}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
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
  getPagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
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
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.state.sheetOpened ? (
          this.renderSheetOpenContent()
        ) : (
          <View style={{ flex: 4 }}>
            <ImageBackground
              source={house}
              resizeMode="cover"
              style={{ width: '100%', height: '100%' }}>
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
                    ref={c => {
                      this._carousel = c;
                    }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={Dimensions.get('screen').width}
                    itemWidth={Dimensions.get('screen').width}
                    activeDotIndex
                    onSnapToItem={index =>
                      this.setState({ activeSlide: index })
                    }
                  />
                  {this.getPagination()}
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
        <View style={{ flex: 1 }}>
          <BottomSheet
            ref={this.sheetRef}
            snapPoints={['20%', '70%', '20%']}
            borderRadius={20}
            renderContent={this.renderContent}
            onOpenStart={() => {
              this.sheetRef.current.snapTo(1);
              this.toggleSheetOpened();
            }}
            onCloseStart={() => {
              this.sheetRef.current.snapTo(0);
              this.toggleSheetOpened();
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default PropertyDetails;
