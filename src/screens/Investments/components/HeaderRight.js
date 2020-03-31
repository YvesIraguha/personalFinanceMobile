import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

export default () => (
  <TouchableOpacity onPress={() => console.log("pressed")}>
    <MaterialCommunityIcons
      name="calendar-range"
      size={30}
      style={styles.calendarIcon}
    />
  </TouchableOpacity>
);
