import React, { Component } from "react";
import { View, Image, ActivityIndicator, AsyncStorage } from "react-native";
import Toast from "react-native-easy-toast";
import { connect } from "react-redux";
import { authenticateUser } from "../../redux/actionsCreators";
import LoginButton from "./components/LoginButton";
import logo from "../../../assets/google.png";
import styles from "./style";

class LoginScreen extends Component {
  state = {
    appLoading: true
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem("token");
    if (token) {
      this.setState({ appLoading: false });
      return navigation.navigate("App");
    } else {
      this.setState({ appLoading: false });
    }
  };

  handleAuthentication = () => {
    const { authenticateUser, navigation } = this.props;
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
        <Image source={logo} style={styles.logoImage} />
        <LoginButton onPress={this.handleAuthentication} />
        {this.renderActivityIndicator()}
        <Toast
          ref="toast"
          style={{ backgroundColor: "#E32D20" }}
          position="top"
          positionValue={200}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  signIn: state
});
export default connect(
  mapStateToProps,
  { authenticateUser }
)(LoginScreen);
