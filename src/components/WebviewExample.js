import React from 'react';
import {View, WebView, StyleSheet} from 'react-native';

const WebViewExample = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'http://localhost:8000'}} />
    </View>
  );
};

export default WebViewExample;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
});
