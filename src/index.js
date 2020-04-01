import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import EStyleSheet from "react-native-extended-stylesheet";
import { store, persistor } from "./redux/index";
import Navigation from "./navigation/index";

EStyleSheet.build({
  $rem: 1.2
});

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </PersistGate>
  </Provider>
);
