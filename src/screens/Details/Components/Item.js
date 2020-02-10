import React from "react";
import { View, Text } from "react-native";
import styles from "./stylesheet";

const Item = ({ title, value }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default Item;
