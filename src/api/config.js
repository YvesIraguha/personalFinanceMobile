import { BACKEND_URL_DEV } from "react-native-dotenv";
import ApolloClient from "apollo-boost";
import { AsyncStorage } from "react-native";

export default new ApolloClient({
  uri: BACKEND_URL_DEV,
  fetchOptions: {
    credentials: "include"
  },
  request: async operation => {
    const token = await AsyncStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token || ""
      }
    });
  }
});
