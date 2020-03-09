import React,  from "react";
import { View, Image } from "react-native";
import profilePic from "../../../assets/profile.jpg";

import styles from "./styles";

export default () => (
  <View>
    <Image
      source={profilePic}
      resizeMode="contain"
      style={styles.headerImage}
    />
  </View>
);
