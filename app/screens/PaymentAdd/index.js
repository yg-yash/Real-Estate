import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Switch,
} from 'react-native';
import { Header, Icon, Card, Button } from 'react-native-elements';
import styles from './styles';
import config from 'app/config/styles';
import Apple from 'app/assets/images/Apple.png';
import paymentImage from 'app/assets/images/payment.png';

class PaymentAdd extends Component {
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
          leftComponent={
            <Icon
              type="antdesign"
              name="left"
              color="white"
              onPress={() => this.props.navigation.goBack()}
            />
          }
          centerComponent={<Text style={styles.headerTitle}>Payment</Text>}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={{ flex: 3 }}>
              <Image
                source={paymentImage}
                resizeMode="cover"
                style={{ alignSelf: 'center' }}
              />
            </View>
            <View style={{ flex: 0.1 }}>
              <Card containerStyle={styles.card}>
                <Text style={styles.paymentText}>Payment Method</Text>
                <View style={styles.row}>
                  <Card containerStyle={styles.paymentCard}>
                    <Icon
                      type="antdesign"
                      name="creditcard"
                      color={config.color.COLOR_PRIMARY_ICON}
                    />
                  </Card>
                  <Card containerStyle={styles.paymentCard}>
                    <Text style={styles.paypal}>PayPal</Text>
                  </Card>
                  <Card containerStyle={[styles.paymentCard]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={Apple}
                        resizeMode="contain"
                        style={{ width: 16, height: 16 }}
                      />
                      <Text style={styles.payText}>Pay</Text>
                    </View>
                  </Card>
                </View>
                <Text style={styles.paymentText}>Details</Text>
                <View style={styles.form}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      value={this.state.username}
                      placeholder="Name on card"
                      onChangeText={text => this.setState({ username: text })}
                      style={styles.input}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      value={this.state.signupEmailAddress}
                      placeholder="Card number"
                      onChangeText={text =>
                        this.setState({ signupEmailAddress: text })
                      }
                      style={styles.input}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={[
                        styles.inputContainer,
                        { flex: 1, marginRight: 10 },
                      ]}>
                      <TextInput
                        value={this.state.signupPassword}
                        placeholder="Express"
                        onChangeText={text =>
                          this.setState({ signupPassword: text })
                        }
                        style={styles.input}
                      />
                    </View>
                    <View style={[styles.inputContainer, { flex: 1 }]}>
                      <TextInput
                        value={this.state.signupPassword}
                        placeholder="CVV"
                        onChangeText={text =>
                          this.setState({ signupPassword: text })
                        }
                        style={styles.input}
                      />
                    </View>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.saveCard}>Save my card details</Text>
                    <Switch />
                  </View>
                </View>
              </Card>
              <Button
                title="Continue"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                titleStyle={styles.btnTitle}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default PaymentAdd;
