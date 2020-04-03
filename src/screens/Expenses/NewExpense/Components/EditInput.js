import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";

const EditInput = ({ value, onTextChange, editable, placeholder }) => {
  return (
    <View style={styles.editInput}>
      <TextInput
        editable={editable}
        multiline
        numberOfLines={1}
        onChangeText={text => onTextChange(text)}
        value={value}
        maxLength={40}
        style={styles.title}
        placeholder={placeholder}
      />
    </View>
  );
};

export default EditInput;
