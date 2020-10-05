import React, { Component } from 'react';
import config from 'app/config/styles';
import styles from '../styles';
import { Icon, Button } from 'react-native-elements';
import { Text, View, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  requestSellerSignup,
  requestBuyerSignup,
} from 'app/actions/loginActions';
import { connect } from 'react-redux';

class SignupTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.props.loginType,
    );
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
  render() {
    const { isLoginLoading, isSignupLoading } = this.props.loadingReducer;
    const { error, signupError } = this.props.loginReducer;
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
        {this.props.loginType === 'Seller' && (
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
            this.props.loginType === 'Seller'
              ? this.onSellerSignupPress()
              : this.onBuyerSignupPress();
          }}
          loading={isSignupLoading}
        />
      </View>
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
  { requestSellerSignup, requestBuyerSignup },
)(SignupTab);
