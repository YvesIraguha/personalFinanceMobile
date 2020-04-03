import * as AppAuth from "expo-app-auth";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "react-native-dotenv";
import { Platform } from "react-native";

const config = {
  issuer: "https://accounts.google.com",
  clientId: Platform.select({
    ios: IOS_CLIENT_ID,
    android: ANDROID_CLIENT_ID
  }),
  scopes: ["profile", "email"]
};

export const getAccessToken = async () => {
  const tokenResponse = await AppAuth.authAsync(config);
  return tokenResponse;
};

export const getUserProfile = async accessToken => {
  const profileData = await fetch("https://www.googleapis.com/userinfo/v2/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    method: "GET"
  });
  return profileData;
};
