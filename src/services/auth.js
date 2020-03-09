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

export default async () => {
  const tokenResponse = await AppAuth.authAsync(config);
  return tokenResponse;
};
