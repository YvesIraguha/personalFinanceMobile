import React, { Component } from "react";
import { Text, View, Button, TextInput, Alert } from "react-native";

export default class Login extends Component {
  state = { firstNumber: 0, secondNumber: 0 };

  onFirstHandler = text => {
    this.setState({ firstNumber: text });
  };

  onSecondHandler = text => {
    this.setState({ secondNumber: text });
  };

  render() {
    const { firstNumber, secondNumber } = this.state;
    return (
      <View style={{ marginTop: 100 }}>
        <Text>Please input something below </Text>
        <TextInput
          style={{
            height: 40,
            borderStyle: "solid",
            borderColor: "red",
            borderWidth: 1
          }}
          value={firstNumber}
          name="title"
          onChangeText={e => this.onFirstHandler(e)}
        />
        <TextInput
          style={{
            height: 40,
            borderStyle: "solid",
            borderColor: "red",
            borderWidth: 1
          }}
          value={secondNumber}
          name="title"
          onChangeText={e => this.onSecondHandler(e)}
        />
        <Button
          onPress={() =>
            Alert.alert(
              `Sum is ${parseInt(firstNumber) + parseInt(secondNumber)}`
            )
          }
          title="sum"
        />

        <Button
          onPress={() =>
            Alert.alert(
              `The product is ${parseInt(firstNumber) * parseInt(secondNumber)}`
            )
          }
          title="Multiply"
        />
      </View>
    );
  }
}
