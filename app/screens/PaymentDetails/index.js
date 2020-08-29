import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Header, Icon, Card, Button } from 'react-native-elements';
import styles from './styles';
import config from 'app/config/styles';
import whitehouse from 'app/assets/images/whitehouse.png';

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
          leftComponent={<Icon type="antdesign" name="left" color="white" />}
          rightComponent={
            <Icon
              type="font-awesome"
              style={{ transform: [{ rotate: '90deg' }] }}
              name="sliders"
              color="white"
            />
          }
          centerComponent={<Text style={styles.headerTitle}>Payment</Text>}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <Card containerStyle={styles.card}>
                <Text style={styles.paymentText}>Payment Details</Text>
                <View
                  style={[
                    styles.row,
                    { justifyContent: 'flex-start', marginTop: 20 },
                  ]}>
                  <Image
                    source={whitehouse}
                    resizeMode="cover"
                    style={{ height: 62, width: 89, borderRadius: 5 }}
                  />

                  <View style={{ marginLeft: 20 }}>
                    <Text style={styles.name}>100 Beny-sur-mer Road...</Text>
                    <View style={styles.iconRow}>
                      <View style={styles.smallIconContainer}>
                        <Icon
                          type="font-awesome"
                          name="bath"
                          size={10}
                          color="#999999"
                        />
                        <Text style={styles.smallIconText}>2 Baths</Text>
                      </View>
                      <View style={styles.smallIconContainer}>
                        <Icon
                          type="font-awesome"
                          name="bed"
                          size={10}
                          color="#999999"
                        />
                        <Text style={styles.smallIconText}>2 Beds</Text>
                      </View>
                      <View style={styles.smallIconContainer}>
                        <Icon
                          type="font-awesome"
                          name="home"
                          size={10}
                          color="#999999"
                        />
                        <Text style={styles.smallIconText}>1500 sqft</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={[styles.row, styles.textRow]}>
                    <Text style={styles.leftText}>Price</Text>
                    <Text style={styles.rightText}>$344,900</Text>
                  </View>
                  <View style={[styles.row, styles.textRow]}>
                    <Text style={styles.leftText}>Tax</Text>
                    <Text style={styles.rightText}>$4,900</Text>
                  </View>
                  <View style={[styles.row, styles.textRow]}>
                    <Text style={styles.leftText}>Lawyer Fee</Text>
                    <Text style={styles.rightText}>$5,900</Text>
                  </View>
                  <View style={[styles.row, styles.textRow]}>
                    <Text style={styles.leftText}>Tour Fee</Text>
                    <Text style={styles.rightText}>$1,000</Text>
                  </View>
                  <View style={[styles.row, styles.textRow]}>
                    <Text style={styles.leftText}>Mortage</Text>
                    <Text style={styles.rightText}>$25,000</Text>
                  </View>
                  <View style={[styles.row, styles.textRow, { marginTop: 20 }]}>
                    <Text style={styles.totalText}>Mortage</Text>
                    <Text style={styles.totalPrice}>$25,000</Text>
                  </View>
                </View>
              </Card>
              <Button
                title="Pay Now"
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
