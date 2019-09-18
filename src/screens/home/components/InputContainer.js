import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Input from './Input';

export default class InputContainer extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{title}</Text>
        <Input />
      </View>
    );
  }
}
