import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import expenseAvatar from "../../../assets/profile.jpg";
import { capitalizeString, convertToHours } from "../../../helpers/utils";

export default ({ title, price, time, navigation }) => (
  <View style={[styles.container, styles.expenseContainer]}>
    <View style={styles.expenseAvatarContainer}>
      <Image
        source={expenseAvatar}
        resizeMode="contain"
        style={styles.expenseAvatar}
      />
    </View>
    <View style={styles.data}>
      <View style={styles.description}>
        <Text style={styles.title}>{capitalizeString(title)}</Text>
        <Text style={styles.price}>{price} RWF</Text>
      </View>
      <View style={styles.left}>
        <Text style={styles.time}>{convertToHours(time)}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Details", {
              title,
              price
            })
          }
        >
          <AntDesign name="infocirlceo" size={25} color="#8E20E3" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
