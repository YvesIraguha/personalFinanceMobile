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
import SaveButton from "./Components/SaveButton";
import DateTimePicker from "./Components/DateTimePicker";

const IMAGE_HEIGHT = 400;
const IMAGE_HEIGHT_SMALL = 100;

const NewInvestmentScreen = ({ navigation }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);
  const [investment, setInvestment] = useState({});
  const onInputChange = (field, value) => {
    setInvestment({ ...investment, [field]: value });
  };

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
          iconName="person-outline"
          placeholder="Name"
          value={investment.type}
          onTextChange={onInputChange}
        />
        <Item
          title="Invested amount"
          name="initialAmount"
          iconName="attach-money"
          placeholder="Invested amount"
          value={investment.initialAmount}
          onTextChange={onInputChange}
        />
        <Item
          title="Target amount"
          name="targetAmount"
          iconName="money-off"
          placeholder="Target amount"
          value={investment.targetAmount}
          onTextChange={onInputChange}
        />
        <DateTimePicker
          title="Date"
          name="matureDate"
          iconName="perm-contact-calendar"
          placeholder="Maturity date"
          value={investment.matureDate}
          onTextChange={onInputChange}
          editable={false}
        />

        <Item
          title="Location"
          name="location"
          iconName="location-on"
          placeholder="Location"
          value={investment.quantity}
          onTextChange={onInputChange}
        />
      </View>
    </View>
  );
};

NewInvestmentScreen.navigationOptions = ({ navigation }) => ({
  title: "Create new investment",
  headerRight: <SaveButton navigation={navigation} />
});
export default NewInvestmentScreen;