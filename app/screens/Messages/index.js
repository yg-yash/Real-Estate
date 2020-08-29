import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {
  Header,
  Icon,
  Card,
  Slider,
  Button,
  Avatar,
} from 'react-native-elements';
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

  renderMessage = item => (
    <Card containerStyle={styles.card}>
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
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <Text style={styles.message}>{item.message}</Text>
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
          leftComponent={<Icon type="feather" name="menu" color="white" />}
          rightComponent={
            <Icon
              type="font-awesome"
              style={{ transform: [{ rotate: '90deg' }] }}
              name="sliders"
              color="white"
            />
          }
          centerComponent={<Text style={styles.headerTitle}>Messages</Text>}
        />

        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => this.renderMessage(item, index)}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Messages;
