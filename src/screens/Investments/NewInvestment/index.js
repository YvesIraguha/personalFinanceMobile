import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Platform
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { EvilIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import imageUrl from "../../../assets/expense.jpeg";
import Item from "./Components/ExpenseProperty";
import styles from "./styles";
import SaveButton from "./Components/SaveButton";
import DateTimePicker from "./Components/DateTimePicker";

const IMAGE_HEIGHT = 400;
const IMAGE_HEIGHT_SMALL = 100;

const NewInvestmentScreen = ({ navigation, apiInProgress }) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);
  const [investment, setInvestment] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
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

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to upload images!");
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true
    });
    if (result.cancelled) {
      return;
    }
    const base64Img = `data:image/jpg;base64,${result.base64}`;
    setSelectedImage(result.uri);
    onInputChange("image", base64Img);
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

  useEffect(() => {
    getPermissionAsync();
  });
  useLayoutEffect(() => {
    navigation.setParams(investment);
  }, [investment]);

  return (
    <View>
      {apiInProgress ? (
        <Spinner
          visible={!!apiInProgress}
          textContent="Loading..."
          textStyle={{ color: "white" }}
        />
      ) : null}
      <View style={{ paddingBottom: keyboardHeight }}>
        <ImageBackground
          source={selectedImage ? { uri: selectedImage } : imageUrl}
          imageStyle={styles.imageStyle}
          style={[styles.expenseImage, { height: imageHeight }]}
        >
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => pickImage()}
          >
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
        </View>
      </View>
    </View>
  );
};

NewInvestmentScreen.navigationOptions = ({ navigation }) => ({
  title: "Create new investment",
  headerRight: <SaveButton navigation={navigation} />
});

const mapStateToProps = ({ apiInProgress }) => ({
  apiInProgress
});
export default connect(
  mapStateToProps,
  null
)(NewInvestmentScreen);
