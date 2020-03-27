import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./styles";

export default ({ navigation }) => {
  const {
    state: { params }
  } = navigation;
  return (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Image
        source={{ uri: params ? params.profileAvatar : null }}
        resizeMode="cover"
        style={styles.profileAvatar}
      />
    </TouchableOpacity>
  );
};
