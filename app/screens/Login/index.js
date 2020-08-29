import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Button, Icon, SocialIcon, CheckBox } from 'react-native-elements';
import styles from './styles';
import purpleback from 'app/assets/images/purpleback.png';
import whitehouse from 'app/assets/images/whitehouse.png';
import config from 'app/config/styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'Login',
      tabs: ['Login', 'Signup'],
      username: '',
      password: '',
      emailAddress: '',
      signupEmailAddress: '',
      signupPassword: '',
      rememberMe: false,
    };
  }
  toggleTabs = () => {
    this.setState(prevState => ({
      currentTab: prevState.currentTab === 'Login' ? 'Signup' : 'Login',
    }));
  };

  renderLoginForm = () => {
    return (
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="mail"
            size={20}
            style={styles.inputLogo}
            color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.emailAddress}
            placeholder="Email Address"
            onChangeText={text => this.setState({ emailAddress: text })}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="lock"
            size={20}
            style={styles.inputLogo}
            color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.password}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            style={styles.input}
          />
        </View>
        <CheckBox
          title="Remember me"
          containerStyle={styles.checkContainer}
          textStyle={styles.checkTitle}
          checked={this.state.rememberMe}
          onPress={() =>
            this.setState(prevState => ({ rememberMe: !prevState.rememberMe }))
          }
          titleProps={{ selectionColor: 'red' }}
          checkedColor={config.color.COLOR_PRIMARY_LABEL}
        />
        <Text style={styles.agreeText}>
          By pressing "submit" you agree to our {'\n'}
          <Text style={styles.underline}>terms & conditions</Text>
        </Text>
      </View>
    );
  };

  renderSignUpForm = () => {
    return (
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="user"
            size={20}
            style={styles.inputLogo}
            color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.username}
            placeholder="Username"
            onChangeText={text => this.setState({ username: text })}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="mail"
            size={20}
            style={styles.inputLogo}
            color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.signupEmailAddress}
            placeholder="Email Address"
            onChangeText={text => this.setState({ signupEmailAddress: text })}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="lock"
            size={20}
            style={styles.inputLogo}
            color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.signupPassword}
            placeholder="Password"
            onChangeText={text => this.setState({ signupPassword: text })}
            style={styles.input}
          />
        </View>
        <Text style={styles.agreeText}>
          By pressing "submit" you agree to our {'\n'}
          <Text style={styles.underline}>terms & conditions</Text>
        </Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <ImageBackground source={purpleback} style={styles.purpleImage}>
                <View style={styles.imageContainer}>
                  <Icon type="antdesign" name="left" color="white" size={30} />
                  <Text style={styles.logoText}>logo here</Text>
                </View>
                <Image
                  source={whitehouse}
                  resizeMode="cover"
                  style={styles.whiteHouse}
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 0 }}>
              <View style={styles.card}>
                <View style={styles.tabsContainer}>
                  {this.state.currentTab === 'Login' ? (
                    <>
                      <TouchableOpacity onPress={this.toggleTabs}>
                        <Text style={styles.tab}>{this.state.tabs[0]}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.toggleTabs}>
                        <Text style={styles.unselectedTab}>
                          {this.state.tabs[1]}
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity onPress={this.toggleTabs}>
                        <Text style={styles.unselectedTab}>
                          {this.state.tabs[0]}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this.toggleTabs}>
                        <Text style={styles.tab}>{this.state.tabs[1]}</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
                <View style={{ flex: 1 }}>
                  {this.state.currentTab === 'Login'
                    ? this.renderLoginForm()
                    : this.renderSignUpForm()}
                </View>
                {this.state.currentTab === 'Login' ? (
                  <Button
                    title="Login"
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btn}
                    titleStyle={styles.btnTitle}
                    onPress={() => this.props.navigation.navigate('Home')}
                  />
                ) : (
                  <Button
                    title="Create Account"
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btn}
                    titleStyle={styles.btnTitle}
                  />
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  top: '-5%',
                }}>
                {this.state.currentTab === 'Login' && (
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
