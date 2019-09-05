import React from "react";
import { View } from "react-native";
import store from "./redux/index";
import { Provider } from "react-redux";
import Navigation from "./navigation/index";

export default App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  </Provider>
);
