import React, { Component } from 'react';
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
import whitehouse from 'app/assets/images/whitehouse.png';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: ['Toronto'],
      selectedCity: 'Toronto',
      roomsList: [1, 2, 3, 4, 5],
      bathsList: [1, 2, 3, 4, 5],
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
      selectedRoom: 1,
      selectedBaths: 1,
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
    item === this.state.selectedRoom ? (
      <Card containerStyle={styles.roomItem} key={item}>
        <View style={styles.row}>
          <Text style={styles.itemText}>{item}</Text>
          <Icon type="antdesign" name="plus" color="white" size={15} />
        </View>
      </Card>
    ) : (
      <TouchableWithoutFeedback
        onPress={() => this.setState({ selectedRoom: item })}>
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
  renderBaths = item =>
    item === this.state.selectedBaths ? (
      <Card containerStyle={styles.roomItem} key={item}>
        <View style={styles.row}>
          <Text style={styles.itemText}>{item}</Text>
          <Icon type="antdesign" name="plus" color="white" size={15} />
        </View>
      </Card>
    ) : (
      <TouchableWithoutFeedback
        onPress={() => this.setState({ selectedBaths: item })}>
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

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          containerStyle={styles.headerContainer}
          leftComponent={
            <Icon
              type="antdesign"
              name="left"
              color="white"
              onPress={() => this.props.navigation.goBack()}
            />
          }
          centerComponent={
            <Text style={styles.headerTitle}>Add New Listing</Text>
          }
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View>
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
            </View>
            <View>
              <Text style={styles.headingText}>Add Images</Text>
              <FlatList
                data={[1, 2, 3]}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Card containerStyle={styles.imageCard}>
                    <Image
                      source={whitehouse}
                      resizeMode="cover"
                      style={{ height: '100%', width: '100%' }}
                    />
                  </Card>
                )}
                ListFooterComponent={
                  <View style={[styles.imageCard, styles.footerImageCard]}>
                    <Icon
                      name="add-circle-outline"
                      type="ionicons"
                      size={30}
                      color={config.color.COLOR_PRIMARY_ICON}
                    />
                    <Text style={styles.addPhotoText}>Add photo</Text>
                  </View>
                }
              />
            </View>

            <View>
              <Text style={styles.headingText}>Property Type</Text>
              <FlatList
                data={this.state.propertyTypes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 10 }}
                renderItem={({ item, index }) =>
                  this.state.selectedProperty.toLowerCase() ===
                  item.name.toLowerCase() ? (
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
                      onPress={() =>
                        this.setState({
                          selectedProperty: item.name,
                        })
                      }>
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
              <Text style={styles.headingText}>Bedrooms</Text>
              <View style={styles.row}>
                {this.state.roomsList.map((item, index) =>
                  this.renderRooms(item, index),
                )}
              </View>
            </View>
            <View>
              <Text style={styles.headingText}>Baths</Text>
              <View style={styles.row}>
                {this.state.bathsList.map((item, index) =>
                  this.renderBaths(item, index),
                )}
              </View>
            </View>

            <View>
              <Text style={styles.headingText}>Select City</Text>
              <View style={styles.row}>
                <FlatList
                  horizontal
                  data={this.state.cityList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) =>
                    this.renderCities(item, index)
                  }
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
                />
              </View>
            </View>
            <View>
              <Text style={styles.headingText}>Neighbourhoods</Text>
              <View style={styles.row}>
                <FlatList
                  horizontal
                  data={this.state.cityList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) =>
                    this.renderCities(item, index)
                  }
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
              </View>
            </View>
            <View>
              <Text style={styles.headingText}>Price</Text>

              <View style={[styles.row, { justifyContent: 'flex-start' }]}>
                <Text style={styles.dollarText}>$</Text>
                <TextInput style={styles.priceInput} />
              </View>
            </View>
            <View>
              <Text style={styles.headingText}>Property Description</Text>

              <Card containerStyle={styles.descriptionCard}>
                <Text style={styles.descriptionText}>
                  This att/row,twnhouse home located at 295,{'\n'}
                  Clinton{'\n'}
                  Street,Toronto is currently for sale and has {'\n'}
                  been{'\n'}
                  available on Zolo.ca for 0 day. This propery is{'\n'}
                  listed{'\n'}
                  at $1,588,000 wuth an estimated mortgage of{'\n'}
                  $5,845* per month. It has 5 beds and 3{'\n'}bathrooms. 295
                  Clinton Street,Toronto is in the Plamerston-Little Italy
                  neightborhood Toronto
                </Text>
              </Card>
            </View>
            <Button
              title="Continue to payment"
              containerStyle={styles.btnContainer}
              titleStyle={styles.btnTitle}
              buttonStyle={styles.btn}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Filter;
