import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './screens/navigators/DrawerNavigator';
import { RootStackNavigator } from './screens/navigators/StackNavigator';

const App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootStackNavigator />
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});