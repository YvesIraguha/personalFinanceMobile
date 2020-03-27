import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";
import Input from "./Input";

const InputContainer = ({ title }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{title}</Text>
    <Input name={title} />
  </View>
);

export default InputContainer;
