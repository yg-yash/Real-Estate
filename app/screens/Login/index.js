import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements';
import styles from './styles';
import purpleback from 'app/assets/images/purpleback.png';
import whitehouse from 'app/assets/images/whitehouse.png';
import { TabView, TabBar } from 'react-native-tab-view';
import LoginTab from './LoginTab';
import SignupTab from './SignupTab';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'login', title: 'Login' },
        { key: 'signup', title: 'Sign Up' },
      ],
    };
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'login':
        return <LoginTab loginType={this.props.route.params.loginType} />;
      case 'signup':
        return <SignupTab loginType={this.props.route.params.loginType} />;
      default:
        return null;
    }
  };

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: 'white', elevation: 0 }}
      activeColor="black"
      renderLabel={({ route, focused, color }) => (
        <Text style={focused ? styles.tab : styles.unselectedTab}>
          {route.title}
        </Text>
      )}
    />
  );
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={{ height: '30%' }}>
              <ImageBackground source={purpleback} style={styles.purpleImage}>
                <View style={styles.imageContainer}>
                  <Icon
                    type="antdesign"
                    name="left"
                    color="white"
                    size={30}
                    onPress={() => {
                      this.props.navigation.goBack();
                    }}
                  />

                  <Text style={styles.logoText}>logo here</Text>
                </View>
                <Image
                  source={whitehouse}
                  resizeMode="cover"
                  style={styles.whiteHouse}
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 1, marginBottom: 200 }}>
              <View
                style={[
                  styles.card,
                  { height: this.state.index === 0 ? 485 : '100%' },
                ]}>
                <TabView
                  navigationState={{
                    index: this.state.index,
                    routes: this.state.routes,
                  }}
                  renderScene={this.renderScene}
                  onIndexChange={index => this.setState({ index })}
                  renderTabBar={this.renderTabBar}
                  //                initialLayout={initialLayout}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  top: '-5%',
                }}>
                {this.state.index === 0 && (
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                )}
                <View style={styles.socialIconRow}>
                  <SocialIcon
                    style={styles.icon}
                    light
                    iconSize={30}
                    type="google"
                  />
                  <SocialIcon style={styles.icon} light type="facebook" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
