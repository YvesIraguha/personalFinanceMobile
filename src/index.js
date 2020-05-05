import React from 'react';
import { View, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ApolloProvider } from '@apollo/react-hooks';
import Navigation from './navigation/index';
import client from './api/config';

EStyleSheet.build({
  $rem: 1.2
});

export default () => (
  <ApolloProvider client={client}>
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  </ApolloProvider>
);
