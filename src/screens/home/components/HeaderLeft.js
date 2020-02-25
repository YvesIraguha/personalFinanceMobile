import React from "react";
import { TouchableOpacity, AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const logOut = async () => {
  await AsyncStorage.removeItem("token");
};
export default () => (
  <TouchableOpacity onPress={logOut}>
    <Ionicons name="md-arrow-back" size={30} style={{ marginLeft: 20 }} />
  </TouchableOpacity>
);
