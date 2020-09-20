import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import purpleback from 'app/assets/images/landing/LandingCard.png';
import whitehouse from 'app/assets/images/landing/whitehouse.png';
import seller from 'app/assets/images/landing/seller.png';
import buyer from 'app/assets/images/landing/buyer.png';
import styles from './styles';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSeller: false,
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={purpleback} style={styles.purpleImage}>
          <Image
            source={whitehouse}
            resizeMode="cover"
            style={styles.whiteHouse}
          />
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Logo Here</Text>
            <Text style={styles.logoCaption}>
              Find the Property of your choice.{'\n'}
              Only 1% Brokerage Fee
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableWithoutFeedback
              onPress={() => this.setState({ isSeller: false })}>
              <Card containerStyle={styles.card}>
                {!this.state.isSeller && (
                  <Icon
                    type="font-awesome"
                    name="check"
                    containerStyle={styles.selectIcon}
                    color="#2ec7ab"
                    size={50}
                    style={{ backgroundColor: 'white' }}
                  />
                )}
                <View style={{ height: '88%' }}>
                  <Image
                    source={buyer}
                    resizeMode="cover"
                    style={styles.image}
                  />
                </View>
                <View style={{ height: '10%' }}>
                  <Text style={styles.cardText}>Become a Buyer</Text>
                </View>
              </Card>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.setState({ isSeller: true })}>
              <Card containerStyle={styles.card}>
                {this.state.isSeller && (
                  <Icon
                    type="font-awesome"
                    name="check"
                    containerStyle={styles.selectIcon}
                    color="#2ec7ab"
                    size={50}
                    style={{ backgroundColor: 'white' }}
                  />
                )}
                <View style={{ height: '88%' }}>
                  <Image
                    source={seller}
                    resizeMode="cover"
                    style={styles.image}
                  />
                </View>
                <View
                  style={{
                    height: '10%',
                  }}>
                  <Text style={styles.cardText}>Become a Seller</Text>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          </View>
          <Button
            title="Sign in"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            titleStyle={styles.btnTitle}
            onPress={() =>
              this.props.navigation.navigate('Login', {
                loginType: this.state.isSeller ? 'Seller' : 'Buyer',
              })
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Landing;
