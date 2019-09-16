import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import profilePic from "../../../assets/profile.jpg";

import styles from "./styles";
export default class HeaderRight extends Component {
  render() {
    return (
      <View>
        <Image
          source={profilePic}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </View>
    );
  }
}
