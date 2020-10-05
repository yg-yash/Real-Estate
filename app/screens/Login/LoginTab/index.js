import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import config from 'app/config/styles';
import styles from '../styles';
import { Icon, CheckBox, Button } from 'react-native-elements';
import { requestLogin } from 'app/actions/loginActions';
import { connect } from 'react-redux';

class LoginTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      userNameError: null,
      passwordError: null,
    };
  }
  onLoginPress = () => {
    if (this.validateUsername() || this.validatePassword()) {
      return;
    }
    this.props.requestLogin(
      this.state.username,
      this.state.password,
      this.props.loginType,
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
  render() {
    const { isLoginLoading } = this.props.loadingReducer;
    const { error } = this.props.loginReducer;

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
        {error ? (
          <Text style={[styles.error, { alignSelf: 'center' }]}>{error}</Text>
        ) : null}
        <Button
          title="Login"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          titleStyle={styles.btnTitle}
          onPress={this.onLoginPress}
          loading={isLoginLoading}
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
  { requestLogin },
)(LoginTab);
