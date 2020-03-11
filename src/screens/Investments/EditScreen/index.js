import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Platform
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import imageUrl from "../../../assets/expense.jpeg";
import Item from "./Components/ExpenseProperty";
import styles from "./styles";
import { convertToReadableDate } from "../../../helpers/utils";
import SaveButton from "./Components/SaveButton";

const IMAGE_HEIGHT = 400;
const IMAGE_HEIGHT_SMALL = 100;

const EditScreen = ({ navigation }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);

  const [investment, setInvestment] = useState({});
  const onInputChange = (field, value) => {
    setInvestment({ ...investment, [field]: value });
  };

  useEffect(() => {
    const {
      state: {
        params: {
          name: title,
          targetAmount: price,
          initialAmount,
          createdAt: time,
          id,
          matureDate
        }
      }
    } = navigation;
    setInvestment({
      id,
      name: title,
      date: convertToReadableDate(time),
      maturityDate: convertToReadableDate(matureDate),
      targetAmount: `${price}`,
      initialAmount: `${initialAmount}`
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
    navigation.setParams(investment);
  }, [investment]);

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
          title="Name"
          name="name"
          value={investment.name}
          onTextChange={onInputChange}
        />
        <Item
          title="Date"
          name="date"
          value={investment.date}
          editable={false}
        />
        <Item
          title="Mature date"
          name="maturityDate"
          value={investment.maturityDate}
          editable={false}
        />
        <Item
          title="Initial amount"
          name="initialAmount"
          value={investment.initialAmount}
          onTextChange={onInputChange}
        />
        <Item
          title="Target amount"
          name="targetAmount"
          value={investment.targetAmount}
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
