import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button, Icon, SocialIcon, CheckBox } from 'react-native-elements';
import styles from './styles';
import purpleback from 'app/assets/images/purpleback.png';
import whitehouse from 'app/assets/images/whitehouse.png';
import config from 'app/config/styles';
import {
  requestLogin,
  requestSellerSignup,
  requestBuyerSignup,
} from '../../actions/loginActions';
import { connect } from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'Login',
      tabs: ['Login', 'Signup'],
      username: '',
      password: '',
      rememberMe: false,
      userNameError: null,
      passwordError: null,
      signupUsername: '',
      signupPassword: '',
      signupEmailAddress: '',
      signupMiddleName: '',
      signupLocation: '',
      signupDescription: '',
      signupPhoneNumber: '',
      signupUsernameError: null,
      signupPasswordError: null,
      signupEmailAddressError: null,
      signupMiddleNameError: null,
      signupLocationError: null,
      signupDescriptionError: null,
      signupPhoneNumberError: null,
    };
  }
  toggleTabs = () => {
    this.setState(prevState => ({
      currentTab: prevState.currentTab === 'Login' ? 'Signup' : 'Login',
      signupEmailAddressError: null,
      signupUsernameError: null,
      signupPasswordError: null,
      userNameError: null,
      passwordError: null,
      locationError: null,
    }));
  };

  renderLoginForm = () => {
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
            onEndEditing={this.validateUsername}
          />
        </View>
        {this.state.userNameError && (
          <Text style={styles.error}>{this.state.userNameError}</Text>
        )}
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
            onEndEditing={this.validatePassword}
            secureTextEntry
          />
        </View>
        {this.state.passwordError && (
          <Text style={styles.error}>{this.state.passwordError}</Text>
        )}
        <CheckBox
          title="Remember me"
          containerStyle={styles.checkContainer}
          textStyle={styles.checkTitle}
          checked={this.state.rememberMe}
          onPress={() =>
            this.setState(prevState => ({
              rememberMe: !prevState.rememberMe,
            }))
          }
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
            value={this.state.signupUsername}
            placeholder="Username"
            onChangeText={text => this.setState({ signupUsername: text })}
            style={styles.input}
            onEndEditing={this.validatesignUpUsername}
          />
        </View>
        {this.state.signupUsernameError && (
          <Text style={styles.error}>{this.state.signupUsernameError}</Text>
        )}
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="user"
            size={20}
            style={styles.inputLogo}
            color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.signupMiddleName}
            placeholder="Middle Name"
            onChangeText={text => this.setState({ signupMiddleName: text })}
            style={styles.input}
            onEndEditing={this.validatesignUpMiddleName}
          />
        </View>
        {this.state.signupMiddleNameError && (
          <Text style={styles.error}>{this.state.signupMiddleNameError}</Text>
        )}
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
            onEndEditing={this.validateEmail}
            style={styles.input}
          />
        </View>
        {this.state.signupEmailAddressError && (
          <Text style={styles.error}>{this.state.signupEmailAddressError}</Text>
        )}
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
            secureTextEntry
            onEndEditing={this.validatesignUpPassword}
          />
        </View>
        {this.state.signupPasswordError && (
          <Text style={styles.error}>{this.state.signupPasswordError}</Text>
        )}
        {this.props.route.params.loginType === 'Seller' && (
          <>
            <View style={styles.inputContainer}>
              <Icon
                type="materialicons"
                name="description"
                size={20}
                style={styles.inputLogo}
                color={config.color.COLOR_PRIMARY_ICON}
              />
              <TextInput
                value={this.state.signupDescription}
                placeholder="Description"
                onChangeText={text =>
                  this.setState({ signupDescription: text })
                }
                style={styles.input}
                onEndEditing={this.validateSignupDescription}
              />
            </View>
            {this.state.signupDescriptionError && (
              <Text style={styles.error}>
                {this.state.signupDescriptionError}
              </Text>
            )}
            <View style={styles.inputContainer}>
              <Icon
                type="antdesign"
                name="phone"
                size={20}
                style={styles.inputLogo}
                color={config.color.COLOR_PRIMARY_ICON}
              />
              <TextInput
                value={this.state.signupPhoneNumber}
                placeholder="Phone Number"
                onChangeText={text =>
                  this.setState({ signupPhoneNumber: text })
                }
                style={styles.input}
                keyboardType="number-pad"
                maxLength={10}
                onEndEditing={this.validateSignupPhoneNumber}
              />
            </View>
            {this.state.signupPhoneNumberError && (
              <Text style={styles.error}>
                {this.state.signupPhoneNumberError}
              </Text>
            )}
          </>
        )}

        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="location-pin"
            size={18}
            style={styles.inputLogo}
            color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.location}
            placeholder="Location"
            onChangeText={text => this.setState({ location: text })}
            style={styles.input}
            onEndEditing={this.validateLocation}
          />
        </View>
        {this.state.locationError && (
          <Text style={styles.error}>{this.state.locationError}</Text>
        )}
        <Text style={styles.agreeText}>
          By pressing "submit" you agree to our {'\n'}
          <Text style={styles.underline}>terms & conditions</Text>
        </Text>
      </View>
    );
  };

  validateUsername = () => {
    if (!this.state.username) {
      this.setState({ userNameError: 'Username is required' });
      return true;
    } else {
      this.setState({ userNameError: null });
      return false;
    }
  };
  validatePassword = () => {
    if (!this.state.password) {
      this.setState({ passwordError: 'Password is required' });
      return true;
    } else if (this.state.password.length < 8) {
      this.setState({
        passwordError: `Password Can't be less than 8`,
      });
      return true;
    } else {
      this.setState({ passwordError: null });
      return false;
    }
  };
  validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.signupEmailAddress) {
      this.setState({ signupEmailAddressError: 'Email is Required' });
      return true;
    }
    if (reg.test(this.state.signupEmailAddress) === false) {
      this.setState({ signupEmailAddressError: 'Email is Invalid' });
      return true;
    } else {
      this.setState({ signupEmailAddressError: null });
      return false;
    }
  };
  validatesignUpUsername = () => {
    if (!this.state.signupUsername) {
      this.setState({ signupUsernameError: 'Username is Required' });
      return true;
    } else if (this.state.signupUsername.length < 5) {
      this.setState({ signupUsernameError: "Username can't be less than 5" });
      return true;
    } else {
      this.setState({ signupUsernameError: null });
      return false;
    }
  };
  validatesignUpMiddleName = () => {
    if (!this.state.signupMiddleName) {
      this.setState({ signupMiddleNameError: 'Middle Name is Required' });
      return true;
    } else {
      this.setState({ signupMiddleNameError: null });
      return false;
    }
  };
  validatesignUpPassword = () => {
    if (!this.state.signupPassword) {
      this.setState({ signupPasswordError: 'Password is Required' });
      return true;
    } else if (this.state.signupPassword.length < 8) {
      this.setState({ signupPasswordError: `Password Can't be less than 8` });
      return true;
    } else {
      this.setState({ signupPasswordError: null });
      return false;
    }
  };
  validateLocation = () => {
    if (!this.state.location) {
      this.setState({ locationError: 'Location is Required' });
      return true;
    } else {
      this.setState({ locationError: null });
      return false;
    }
  };
  validateSignupDescription = () => {
    if (!this.state.signupDescription) {
      this.setState({ signupDescriptionError: 'Description is Required' });
      return true;
    } else {
      this.setState({ signupDescriptionError: null });
      return false;
    }
  };
  validateSignupPhoneNumber = () => {
    let regex = /[6-9]{1}[0-9]{9}/;
    if (!this.state.signupPhoneNumber) {
      this.setState({ signupPhoneNumberError: 'Phone Number is Required' });
      return true;
    } else if (!regex.test(this.state.signupPhoneNumber)) {
      this.setState({
        signupPhoneNumberError: 'Phone Number is Invalid',
      });
      return true;
    } else {
      this.setState({ signupPhoneNumberError: null });
      return false;
    }
  };

  onLoginPress = () => {
    if (this.validateUsername() || this.validatePassword()) {
      return;
    }
    this.props.requestLogin(
      this.state.username,
      this.state.password,
      this.props.route.params.loginType,
    );
  };

  onSellerSignupPress = () => {
    if (
      this.validatesignUpUsername() ||
      this.validatesignUpMiddleName() ||
      this.validateEmail() ||
      this.validatesignUpPassword() ||
      this.validateSignupDescription() ||
      this.validateSignupPhoneNumber() ||
      this.validateLocation()
    ) {
      return;
    }

    this.props.requestSellerSignup(
      this.state.signupUsername,
      this.state.signupPassword,
      this.state.signupEmailAddress,
      this.state.location,
      this.state.signupDescription,
      this.state.signupMiddleName,
      this.state.signupPhoneNumber,
    );
  };
  onBuyerSignupPress = () => {
    if (
      this.validatesignUpUsername() ||
      this.validatesignUpMiddleName() ||
      this.validateEmail() ||
      this.validatesignUpPassword() ||
      this.validateLocation()
    ) {
      return;
    }
    this.props.requestBuyerSignup(
      this.state.signupUsername,
      this.state.signupPassword,
      this.state.signupEmailAddress,
      this.state.location,
      this.state.signupMiddleName,
      this.props.route.params.loginType,
    );
  };

  render() {
    const { isLoginLoading, isSignupLoading } = this.props.loadingReducer;
    const { error, signupError } = this.props.loginReducer;

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
              <View style={styles.card}>
                <View style={styles.tabsContainer}>
                  {this.state.currentTab === 'Login' ? (
                    <>
                      <TouchableWithoutFeedback onPress={this.toggleTabs}>
                        <Text style={styles.tab}>{this.state.tabs[0]}</Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={this.toggleTabs}>
                        <Text style={styles.unselectedTab}>
                          {this.state.tabs[1]}
                        </Text>
                      </TouchableWithoutFeedback>
                    </>
                  ) : (
                    <>
                      <TouchableWithoutFeedback onPress={this.toggleTabs}>
                        <Text style={styles.unselectedTab}>
                          {this.state.tabs[0]}
                        </Text>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={this.toggleTabs}>
                        <Text style={styles.tab}>{this.state.tabs[1]}</Text>
                      </TouchableWithoutFeedback>
                    </>
                  )}
                </View>
                <View style={{ flex: 1 }}>
                  {this.state.currentTab === 'Login'
                    ? this.renderLoginForm()
                    : this.renderSignUpForm()}
                </View>
                {this.state.currentTab === 'Login' ? (
                  <>
                    {error ? (
                      <Text style={[styles.error, { alignSelf: 'center' }]}>
                        {error}
                      </Text>
                    ) : null}
                    <Button
                      title="Login"
                      containerStyle={styles.btnContainer}
                      buttonStyle={styles.btn}
                      titleStyle={styles.btnTitle}
                      onPress={this.onLoginPress}
                      loading={isLoginLoading}
                    />
                  </>
                ) : (
                  <>
                    {signupError ? (
                      <Text style={[styles.error, { alignSelf: 'center' }]}>
                        {signupError}
                      </Text>
                    ) : null}
                    <Button
                      title="Create Account"
                      containerStyle={styles.btnContainer}
                      buttonStyle={styles.btn}
                      titleStyle={styles.btnTitle}
                      onPress={() => {
                        this.props.route.params.loginType === 'Seller'
                          ? this.onSellerSignupPress()
                          : this.onBuyerSignupPress();
                      }}
                      loading={isSignupLoading}
                    />
                  </>
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

const mapStateToProps = state => {
  return {
    loadingReducer: state.loadingReducer,
    loginReducer: state.loginReducer,
  };
};

export default connect(
  mapStateToProps,
  { requestLogin, requestSellerSignup, requestBuyerSignup },
)(Login);
