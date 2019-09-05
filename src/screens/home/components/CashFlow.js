import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import editButton from "../../../assets/edit.png";
class CashFlow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cash flow</Text>
        <View style={[styles.container, styles.cashContainer]}>
          <Text style={styles.text}>50000Rwf</Text>
          <Image
            source={editButton}
            resizeMode="contain"
            style={styles.editImage}
          />
        </View>
      </View>
    );
  }
}

export default CashFlow;
