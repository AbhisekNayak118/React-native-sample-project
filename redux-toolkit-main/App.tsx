import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainTabs from './src/navigation/MainTabs';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './src/screens/eg_useTransition';
import eg_dv  from './src/screens/eg_useDeferredValue';
const App = () => {
  return (
      <NavigationContainer>
        <SearchScreen/>
        {/* <eg_dv/> */}
        {/* <MainTabs /> */}
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});


