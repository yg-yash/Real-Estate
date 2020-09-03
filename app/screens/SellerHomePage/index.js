import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header, Icon, Card, Avatar, Button } from 'react-native-elements';
import styles from './styles';
import config from 'app/config/styles';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Sarah Willians',
          time: '9:03pm',
          message: 'which one? with the text? Ok Del...',
        },
        {
          name: 'Sarah Willians',
          time: '9:03pm',
          message: 'which one? with the text? Ok Del...',
        },
        {
          name: 'Sarah Willians',
          time: '9:03pm',
          message: 'which one? with the text? Ok Del...',
        },
        {
          name: 'Sarah Willians',
          time: '9:03pm',
          message: 'which one? with the text? Ok Del...',
        },
        {
          name: 'Sarah Willians',
          time: '9:03pm',
          message: 'which one? with the text? Ok Del...',
        },
        {
          name: 'Sarah Willians',
          time: '9:03pm',
          message: 'which one? with the text? Ok Del...',
        },
      ],
    };
  }

  renderCard = () => (
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

  renderMessage = (item, index) => (
    <Card containerStyle={styles.card} key={index}>
      <View style={styles.row}>
        <Avatar
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={styles.avatar}
        />
        <View style={{ marginLeft: 15, flex: 1 }}>
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.message}>{item.time}</Text>
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
              onPress={() => this.props.navigation.openDrawer()}
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
          centerComponent={<Text style={styles.headerTitle}>Logo Here</Text>}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Text style={styles.backText}>Welcome Back!</Text>
            <Text style={styles.userName}>Micheal Johnson</Text>
            <View style={styles.row}>
              <Text style={styles.title}>Appointments Request</Text>
              <Icon
                type="antdesign"
                name="right"
                size={15}
                color={config.color.COLOR_PRIMARY_ICON}
              />
            </View>
            {this.renderCard()}
            <View style={[styles.row, { marginTop: 20 }]}>
              <Text style={styles.title}>Showing Request</Text>
              <Icon
                type="antdesign"
                name="right"
                size={15}
                color={config.color.COLOR_PRIMARY_ICON}
              />
            </View>
            {this.renderCard()}
            <View style={[styles.row, { marginTop: 20 }]}>
              <Text style={styles.title}>Upcoming Shows</Text>
              <Icon
                type="antdesign"
                name="right"
                size={15}
                color={config.color.COLOR_PRIMARY_ICON}
              />
            </View>
            {this.renderMessage(this.state.data[0])}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Messages;
