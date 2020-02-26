import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import EditInput from "./EditInput";

const Item = ({ title, value, name, onTextChange, editable }) => {
  const handleTextChange = text => {
    onTextChange(name, text);
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
      <EditInput
        value={value}
        onTextChange={handleTextChange}
        editable={editable}
      />
    </View>
  );
};

export default Item;
