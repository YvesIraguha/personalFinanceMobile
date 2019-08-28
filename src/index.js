import React from "react";
import { StyleSheet, View } from "react-native";
import store from "./redux/index";
import { Provider } from "react-redux";
import Navigation from "./navigation/index";

export default App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Navigation />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
