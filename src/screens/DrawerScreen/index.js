import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import profileAvatar from "../../assets/profile.jpg";
import styles from "./styles";

export default props => {
  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    props.navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={profileAvatar} style={styles.profileAvatar} />
        <Text style={styles.profileText}>Yves Iraguha</Text>
      </View>
      <View>
        <DrawerNavigatorItems {...props} />
      </View>
      <TouchableOpacity style={styles.logoutContainer} onPress={logOut}>
        <Text style={styles.logoutText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};
