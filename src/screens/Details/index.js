import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import imageUrl from "../../assets/expense.jpeg";
import Item from "./Components/Item";
import styles from "./styles";
import { convertToReadableDate } from "../../helpers/utils";

export const Details = props => {
  const {
    navigation,
    navigation: {
      state: {
        params,
        params: { type: title, price, createdAt: time }
      }
    }
  } = props;

  const navigateToEditScreen = () => {
    navigation.navigate("EditScreen", params);
  };

  return (
    <View>
      <ImageBackground
        source={imageUrl}
        imageStyle={styles.imageStyle}
        style={styles.expenseImage}
      >
        <Text style={styles.titleStyle}>{title}</Text>
      </ImageBackground>
      <View style={styles.itemsContainer}>
        <Item title="Date" value={convertToReadableDate(time)} />
        <Item title="Price" value={`${price} RWF`} />
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

Details.navigationOptions = {
  headerTransparent: true,
  headerTintColor: "white"
};
const mapStateToProps = state => ({ state });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
