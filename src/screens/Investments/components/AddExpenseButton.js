import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const AddExpenseButton = ({ navigation, target, params }) => {
  return (
    <TouchableOpacity
      style={styles.filterBtn}
      onClick={navigate.navigate(target, params)}
    >
      <Text>Add expense </Text>
    </TouchableOpacity>
  );
};

export default AddExpenseButton;
