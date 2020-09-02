import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Header, Icon, Card, Avatar } from 'react-native-elements';
import styles from './styles';

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
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          }
          rightComponent={
            <Icon
              type="font-awesome"
              style={{ transform: [{ rotate: '90deg' }] }}
              name="sliders"
              color="white"
            />
          }
          centerComponent={<Text style={styles.headerTitle}>Appointments</Text>}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Text style={styles.title}>Requested Showings</Text>
            {this.state.data.map((item, index) =>
              this.renderMessage(item, index),
            )}

            <Text style={[styles.title, { marginTop: 20 }]}>
              Next Appointments
            </Text>
            {this.state.data.map((item, index) =>
              this.renderMessage(item, index),
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Messages;
