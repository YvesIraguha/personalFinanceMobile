import React, { useEffect, useState, useRef } from "react";
import { View, Image, ActivityIndicator, AsyncStorage } from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";
import { useMutation } from "@apollo/react-hooks";
import LoginButton from "./components/LoginButton";
import personalFinance from "../../assets/undraw_personal_finance_tqcd.png";
import styles from "./style";
import { getUserProfile, getAccessToken } from "../../services/auth";
import createUserQuery from "../../api/queries/authenticationQueries";

const LoginScreen = props => {
  const { navigation } = props;
  const [state, setState] = useState({ appLoading: true });
  const toast = useRef(null);

  const renderToast = message => {
    toast.current.show(message, DURATION.LENGTH_LONG);
  };

  const [registerUser, { loading, error }] = useMutation(createUserQuery, {
    onCompleted(data) {
      const {
        createUser: { token }
      } = data;
      AsyncStorage.setItem("token", token);
      navigation.navigate("App");
    }
  });

  const checkAuthenticatedUSer = async () => {
    const token = await AsyncStorage.getItem("token");
    const profilePicture = await AsyncStorage.getItem("userProfile");
    if (token && profilePicture) {
      setState({ appLoading: false });
      return navigation.navigate("App");
    }
    setState({ appLoading: false });
    return navigation.navigate("Auth");
  };

  const handleAuthentication = async () => {
    try {
      const { accessToken } = await getAccessToken();
      const profileData = await getUserProfile(accessToken);
      const userProfile = await profileData.json();
      AsyncStorage.setItem("userProfile", JSON.stringify(userProfile));
      registerUser({ variables: { accessToken } });
    } catch (err) {
      renderToast(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticatedUSer();
  }, []);

  const renderActivityIndicator = () => {
    return (
      loading && (
        <View>
          <ActivityIndicator size="small" color="#20D6E3" />
        </View>
      )
    );
  };

  const { appLoading } = state;
  if (error) {
    return renderToast(error.message);
  }

  return appLoading ? (
    renderActivityIndicator()
  ) : (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={personalFinance}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <LoginButton onPress={handleAuthentication} authenticating={loading} />
        <Toast
          ref={toast}
          style={{ backgroundColor: "#E32D20", marginTop: 200 }}
          position="top"
          positionValue={200}
        />
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: null
};

export default LoginScreen;
