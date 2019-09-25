import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './redux/index';
import Navigation from './navigation/index';

EStyleSheet.build({
  $rem: 1.2,
});

export default App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  </Provider>
);
