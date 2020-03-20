import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import imageUrl from "../../../assets/expense.jpeg";
import Item from "./Components/Item";
import styles from "./styles";
import { convertToReadableDate } from "../../../helpers/utils";
import MoreButton from "./Components/DeleteButton";

export const Details = props => {
  const {
    navigation,
    navigation: {
      state: {
        params,
        params: {
          name: title,
          targetAmount: price,
          createdAt: time,
          matureDate,
          initialAmount,
          id
        }
      }
    }
  } = props;

  const navigateToEditScreen = () => {
    navigation.navigate("EditScreen", params);
  };

  useLayoutEffect(() => {
    navigation.setParams(id);
  }, [id]);

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={imageUrl}
        imageStyle={styles.imageStyle}
        style={styles.expenseImage}
      >
        <Text style={styles.titleStyle}>{title}</Text>
      </ImageBackground>
      <View style={styles.itemsContainer}>
        <Item title="Date" value={convertToReadableDate(time)} />
        <Item title="Maturity date" value={convertToReadableDate(matureDate)} />
        <Item title="Invested amount" value={`${initialAmount} RWF`} />
        <Item title="Target amount" value={`${price} RWF`} />
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={navigateToEditScreen}
      >
        <MaterialIcons name="edit" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

Details.navigationOptions = ({ navigation }) => ({
  headerTransparent: true,
  headerTintColor: "white",
  headerRight: <MoreButton navigation={navigation} />
});

export default Details;
