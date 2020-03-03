import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Platform
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import imageUrl from "../../assets/expense.jpeg";
import Item from "./Components/ExpenseProperty";
import styles from "./styles";
import { convertToReadableDate } from "../../helpers/utils";
import SaveButton from "./Components/SaveButton";

const IMAGE_HEIGHT = 400;
const IMAGE_HEIGHT_SMALL = 100;

const EditScreen = ({ navigation }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);

  const [expense, setExpense] = useState({});

  const onInputChange = (field, value) => {
    setExpense({ ...expense, [field]: value });
  };

  useEffect(() => {
    const {
      state: {
        params: { type: title, price, createdAt: time, quantity, id }
      }
    } = navigation;
    setExpense({
      id,
      type: title,
      date: convertToReadableDate(time),
      price: `${price}`,
      amount: "1000 Rwf",
      quantity: `${quantity || 0}`
    });
  }, []);

  const keyboardWillShow = event => {
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
          title="Type"
          name="type"
          value={expense.type}
          onTextChange={onInputChange}
        />
        <Item title="Date" name="date" value={expense.date} editable={false} />
        <Item
          title="Amount"
          name="amount"
          value={expense.amount}
          onTextChange={onInputChange}
        />
        <Item
          title="Price"
          name="price"
          value={expense.price}
          onTextChange={onInputChange}
        />
        <Item
          title="Quantity"
          name="quantity"
          value={expense.quantity}
          onTextChange={onInputChange}
        />
      </View>
    </View>
  );
};

EditScreen.navigationOptions = ({ navigation }) => ({
  headerRight: <SaveButton navigation={navigation} />
});
export default EditScreen;
