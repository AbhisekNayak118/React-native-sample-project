import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainTabs from './src/navigation/MainTabs';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './src/screens/eg_useTransition';
import Eg_dv  from './src/screens/eg_useDeferredValue';
import NetworkScreen from './src/screens/NetScreen';
const App = () => {
  return (
      <NavigationContainer>
        {/* <SearchScreen/> */}
        <NetworkScreen/>
        {/* <Eg_dv/> */}
        {/* <MainTabs /> */}

      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});


