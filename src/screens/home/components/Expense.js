import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import editButton from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";

export default class Expense extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.cashContainer]}>
          <Text style={styles.text}>Pants</Text>
          <Image
            source={editButton}
            resizeMode="contain"
            style={styles.editImage}
          />
        </View>
        <View style={[styles.container, styles.cashContainer]}>
          <Text style={styles.text}>2000Rwf</Text>
          <Image
            source={editButton}
            resizeMode="contain"
            style={styles.editImage}
          />
        </View>
        <Image
          source={deleteIcon}
          resizeMode="contain"
          style={styles.editImage}
        />
      </View>
    );
  }
}
