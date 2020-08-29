import React, { Component } from 'react';
import { Text, View, ImageBackground, SafeAreaView, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import purpleback from 'app/assets/images/landing/LandingCard.png';
import whitehouse from 'app/assets/images/landing/whitehouse.png';
import seller from 'app/assets/images/landing/seller.png';
import buyer from 'app/assets/images/landing/buyer.png';
import styles from './styles';

class Landing extends Component {
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
            <Card containerStyle={styles.card}>
              <View style={{ height: '88%' }}>
                <Image source={buyer} resizeMode="cover" style={styles.image} />
              </View>
              <View style={{ height: '10%' }}>
                <Text style={styles.cardText}>Become a Buyer</Text>
              </View>
            </Card>
            <Card containerStyle={styles.card}>
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
          </View>
          <Button
            title="Sign in"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            titleStyle={styles.btnTitle}
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Landing;
