import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export default ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("NewInvestment")}
    style={styles.addInvestmentBtn}
  >
    <Ionicons name="ios-add" size={30} color="white" />
  </TouchableOpacity>
);
