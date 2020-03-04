import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import googleIcon from "../../../../assets/google.png";
import styles from "./styles";

const LoginButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.loginButton}>
      <Image
        source={googleIcon}
        resizeMode="contain"
        style={styles.loginIcon}
      />
      <Text style={styles.loginText}>Sign in with Google</Text>
    </View>
  </TouchableOpacity>
);

export default LoginButton;
