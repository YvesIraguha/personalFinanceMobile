import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Platform,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import imageUrl from "../../../assets/expense.jpeg";
import Item from "./Components/ExpenseProperty";
import styles from "./styles";
import SaveButton from "./Components/SaveButton";

const IMAGE_HEIGHT = 400;
const IMAGE_HEIGHT_SMALL = 100;

const NewExpenseScreen = ({ navigation }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);
  const [expense, setExpense] = useState({});

  const onInputChange = (field, value) => {
    setExpense({ ...expense, [field]: value });
  };

  const keyboardWillShow = (event) => {
    setKeyboardHeight(event.endCoordinates.height);
    setImageHeight(IMAGE_HEIGHT_SMALL);
  };

  const keyboardWillHide = () => {
    setKeyboardHeight(0);
    setImageHeight(IMAGE_HEIGHT);
  };

  useEffect(() => {
    const firstEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const secondEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    const keyboardWillShowSub = Keyboard.addListener(
      firstEvent,
      keyboardWillShow
    );
    const keyboardWillHideSub = Keyboard.addListener(
      secondEvent,
      keyboardWillHide
    );
    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setParams(expense);
  }, [expense]);

  return (
    <View>
      <View style={{ paddingBottom: keyboardHeight }}>
        <ImageBackground
          source={imageUrl}
          imageStyle={styles.imageStyle}
          style={[styles.expenseImage, { height: imageHeight }]}
        >
          <TouchableOpacity style={styles.editButton}>
            <EvilIcons name="camera" size={56} color="white" />
          </TouchableOpacity>
        </ImageBackground>
        <View style={[styles.itemsContainer]}>
          <Item
            title="Name"
            name="type"
            iconName="person-outline"
            placeholder="Type"
            value={expense.type}
            onTextChange={onInputChange}
          />
          <Item
            title="Cost"
            name="price"
            iconName="attach-money"
            placeholder="Cost"
            value={expense.price}
            onTextChange={onInputChange}
          />
          <Item
            title="Quantity"
            name="quantity"
            iconName="money-off"
            placeholder="Quantity"
            value={expense.quantity}
            onTextChange={onInputChange}
          />
        </View>
      </View>
    </View>
  );
};

NewExpenseScreen.navigationOptions = ({ navigation }) => ({
  title: "Create new expense",
  headerRight: <SaveButton navigation={navigation} />,
});

export default NewExpenseScreen;
