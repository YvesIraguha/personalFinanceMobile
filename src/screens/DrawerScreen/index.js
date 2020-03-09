import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import styles from "./styles";

const getProfileImage = async () => {
  const profilePicture = await AsyncStorage.getItem("userProfile");
  const profile = await JSON.parse(profilePicture);
  return profile;
};

export default props => {
  const [profile, setProfile] = useState({});
  const fetchProfile = async () => {
    const userProfile = await getProfileImage();
    setProfile(userProfile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    props.navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: profile ? profile.picture : null }}
          style={styles.profileAvatar}
        />
        <Text
          style={styles.profileText}
        >{`${`${profile.family_name} ${profile.given_name}`} `}</Text>
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
