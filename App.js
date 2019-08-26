import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import {getAccessToken } from './src/services/auth'
export default App = () => {
  return (
    <View style={styles.container}>
    <TouchableHighlight onPress={()=>getAccessToken()}>
      <Text>Login</Text>
    </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
