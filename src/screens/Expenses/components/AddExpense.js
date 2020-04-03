import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const AddExpense = (props) => {
  const { navigation } = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewExpense")}
      style={styles.addExpense}
    >
      <Ionicons name="ios-add" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default AddExpense;
