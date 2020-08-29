import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
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
          leftComponent={<Icon type="antdesign" name="left" color="white" />}
          rightComponent={
            <Icon
              type="font-awesome"
              style={{ transform: [{ rotate: '90deg' }] }}
              name="sliders"
              color="white"
            />
          }
          centerComponent={<Text style={styles.headerTitle}>Filters</Text>}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
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
                        color="#999999"
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
                        color="#999999"
                      />
                      <Text style={styles.addText}>Add Neighbourds</Text>
                    </View>
                  }
                />
              </View>
            </View>
            <View>
              <Text style={styles.headingText}>Property Type</Text>
              <View style={styles.row}>
                <TouchableWithoutFeedback>
                  <Card containerStyle={styles.smallCard}>
                    <View style={styles.row}>
                      <Icon
                        name="home"
                        color={config.color.COLOR_PRIMARY_ICON}
                      />
                      <Text style={styles.optionText}>Residential</Text>
                    </View>
                  </Card>
                </TouchableWithoutFeedback>
                <Card containerStyle={styles.smallCard}>
                  <View style={styles.row}>
                    <Icon
                      type="font-awesome"
                      name="building-o"
                      color="#e0e0e0"
                    />
                    <Text style={[styles.optionText, { color: '#999999' }]}>
                      Commercial
                    </Text>
                  </View>
                </Card>
              </View>
            </View>
            <View>
              <Text style={styles.headingText}>Price Range</Text>
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
            <View>
              <Text style={styles.headingText}>Bedrooms</Text>
              <View style={styles.row}>
                <FlatList
                  horizontal
                  data={this.state.roomsList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) =>
                    this.renderRooms(item, index)
                  }
                  contentContainerStyle={{ paddingBottom: 10 }}
                />
              </View>
            </View>
            <View>
              <Text style={styles.headingText}>Baths</Text>
              <View style={styles.row}>
                <FlatList
                  horizontal
                  data={this.state.roomsList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) =>
                    this.renderRooms(item, index)
                  }
                  contentContainerStyle={{ paddingBottom: 10 }}
                />
              </View>
            </View>
            <Button
              title="Apply Filter"
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
