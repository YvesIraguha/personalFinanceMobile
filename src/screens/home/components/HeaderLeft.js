import React from "react";
import { TouchableOpacity, Image } from "react-native";
import profileAvatar from "../../../assets/profile.jpg";
import styles from "./styles";

// const logOut = async () => {
//   await AsyncStorage.removeItem("token");
// };
export default () => (
  <TouchableOpacity>
    <Image
      source={profileAvatar}
      resizeMode="contain"
      style={styles.profileAvatar}
    />
  </TouchableOpacity>
);
