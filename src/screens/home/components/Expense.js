import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import expenseAvatar from "../../../assets/profile.jpg";

export default ({ title, price, time }) => (
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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.left}>
        <Text style={styles.time}>{time}</Text>
        <AntDesign name="infocirlceo" size={25} color="#8E20E3" />
      </View>
    </View>
  </View>
);
