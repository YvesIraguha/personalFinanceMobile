import React, { Component } from "react";
import { View, Image, ActivityIndicator, AsyncStorage } from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";
import { connect } from "react-redux";
import registerUser from "../../redux/actionsCreators/authentication";
import LoginButton from "./components/LoginButton";

import personalFinance from "../../assets/undraw_personal_finance_tqcd.png";
import styles from "./style";

class LoginScreen extends Component {
  state = {
    appLoading: true
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem("token");
    if (token) {
      this.setState({ appLoading: false });
      return navigation.navigate("App");
    }
    this.setState({ appLoading: false });
    return navigation.navigate("Auth");
  };

  handleAuthentication = () => {
    const { registerUser: authenticateUser, navigation } = this.props;
    authenticateUser(navigation);
  };

  renderToast = message => {
    this.refs.toast.show(message, DURATION.LENGTH_LONG);
  };

  renderActivityIndicator = () => {
    const {
      signIn: { authenticationInProgress }
    } = this.props;

    return authenticationInProgress ? (
      <View>
        <ActivityIndicator size="small" color="#20D6E3" />
      </View>
    ) : null;
  };

  componentWillReceiveProps = nextProps => {
    const {
      signIn: { errorMessage }
    } = nextProps;
    if (errorMessage) {
      this.renderToast(errorMessage);
    }
  };

  render() {
    const { appLoading } = this.state;
    return appLoading ? (
      <View>
        <ActivityIndicator size="small" color="#20D6E3" />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={personalFinance}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <LoginButton onPress={this.handleAuthentication} />
          {this.renderActivityIndicator()}
          <Toast
            ref="toast"
            style={{ backgroundColor: "#E32D20", marginTop: 200 }}
            position="top"
            positionValue={200}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  signIn: state
});
export default connect(
  mapStateToProps,
  { registerUser }
)(LoginScreen);
