import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header, Icon, Card, Avatar, Button } from 'react-native-elements';
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

  renderAppointmentCard = () => (
    <Card containerStyle={styles.bigCard}>
      <View style={styles.upperCardContainer}>
        <View style={styles.row}>
          <Text style={styles.titleHeader}>Appointment Request</Text>
          <Icon type="feather" name="more-vertical" color="white" />
        </View>
        <View style={styles.secondRow}>
          <Icon type="font-awesome" name="calendar" color="white" size={18} />
          <Text style={styles.timing}>12 June 2020,10am -12 am</Text>
        </View>
      </View>
      <View style={styles.cardBottomContainer}>
        <View style={[styles.row, { flex: 1, justifyContent: 'flex-start' }]}>
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            containerStyle={styles.avatar}
          />
          <Text style={styles.cardUserName}>
            Sarah{'\n'}
            <Text style={styles.lastName}>Williams</Text>
          </Text>
        </View>
        <View style={[styles.row, { flex: 1, marginHorizontal: 10 }]}>
          <Button
            title="Accept"
            containerStyle={styles.acceptBtnContainer}
            buttonStyle={styles.acceptBtn}
            titleStyle={styles.acceptBtnTitle}
          />
          <Button
            title="Decline"
            containerStyle={styles.declineBtnContainer}
            buttonStyle={styles.declineBtn}
            titleStyle={styles.declineTitleStyle}
          />
        </View>
      </View>
    </Card>
  );

  renderSmallCard = (item, index) => (
    <Card containerStyle={styles.smallcard} key={index}>
      <View style={styles.smallCardrow}>
        <Avatar
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={styles.avatar}
        />
        <View style={{ marginLeft: 15, flex: 1 }}>
          <View style={styles.smallCardrow}>
            <Text style={styles.name}>Sarah Willians</Text>
          </View>
          <Text style={styles.message}>9:03pm</Text>
        </View>
        <Icon type="feather" name="more-vertical" color="#6a7bb0" />
      </View>
    </Card>
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          containerStyle={styles.headerContainer}
          leftComponent={
            <Icon
              type="feather"
              name="menu"
              color="white"
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Filter')}>
              <Icon
                type="font-awesome"
                style={{ transform: [{ rotate: '90deg' }] }}
                name="sliders"
                color="white"
              />
            </TouchableOpacity>
          }
          centerComponent={<Text style={styles.headerTitle}>LOGO HERE</Text>}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.topCard}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#9889ff',
                }}>
                Welcome Back!
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  marginTop: 10,
                }}>
                Vikhyat Shetty
              </Text>
            </View>
            <Avatar
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              size={50}
              rounded
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.headingsText}>Overview</Text>
            <View style={styles.gradientRow}>
              <LinearGradient
                colors={['#fb799a', '#fa6f9b', '#f6569f']}
                style={styles.gradientCard}>
                <Text style={styles.gradientCardText}>
                  Total Properties{'\n'} Added
                </Text>
                <Text style={styles.gradientCardBoldText}>17</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#b7e3f9', '#699ff2', '#6459f0']}
                style={styles.gradientCard}>
                <Text style={styles.gradientCardText}>Pending Operations</Text>
                <Text style={styles.gradientCardBoldText}>43%</Text>
              </LinearGradient>
            </View>
            <View style={styles.gradientRow}>
              <LinearGradient
                colors={['#fabfcf', '#f582d3', '#f164e5']}
                style={styles.gradientCard}>
                <Text style={styles.gradientCardText}>
                  Pending Appointment{'\n'} Request
                </Text>
                <Text style={styles.gradientCardBoldText}>3</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#ffc81b', '#ffae1b', '#ff8e1b']}
                style={styles.gradientCard}>
                <Text style={styles.gradientCardText}>
                  Upcoming Appointments{'\n'}Scheduled
                </Text>
                <Text style={styles.gradientCardBoldText}>12</Text>
              </LinearGradient>
            </View>
            <Button title="Add a new Property" buttonStyle={styles.addBtn} />
            <Text style={styles.headingsText}>Appointments Request</Text>
            {this.renderAppointmentCard()}
            <Text style={styles.headingsText}>Showing Request</Text>
            {this.renderAppointmentCard()}
            <Text style={styles.headingsText}>Upcoming Appointment</Text>
            {this.renderSmallCard()}
            <Text style={styles.headingsText}>Upcoming Shows</Text>
            {this.renderSmallCard()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Filter;
