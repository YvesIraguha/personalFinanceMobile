import React from "react";
import { View } from "react-native";
import store from "./redux/index";
import { Provider } from "react-redux";
import Navigation from "./navigation/index";

import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({ 
  $rem: 1.2
});

export default App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  </Provider>
);
