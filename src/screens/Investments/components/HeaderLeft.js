import React from "react";
import { TouchableOpacity, Image } from "react-native";
import profileAvatar from "../../../assets/profile.jpg";
import styles from "./styles";

export default ({ navigation }) => (
  <TouchableOpacity onPress={navigation.openDrawer}>
    <Image
      source={profileAvatar}
      resizeMode="contain"
      style={styles.profileAvatar}
    />
  </TouchableOpacity>
);
