import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <View style={GlobalStyles.container}>
      <Home />
    </View>
  );
};
export default App;

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotstyle: {height: 0},
});
