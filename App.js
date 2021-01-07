import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo, useReducer, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './screens/navigators/DrawerNavigator';
import { RootStackNavigator } from './screens/navigators/StackNavigator';
import AppContext from './context/Context';
import { loginReducer } from './reducers/AppReducer';


const App = () => {
  const initialLoginState = {
    isLoading: false,
    userName: null,
    usertoken: null
  }
  
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);
  
  if(initialLoginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} color="#009387" size="large" />
      </View>
    )
  }
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <View style={styles.container}>
        <NavigationContainer>
          {state.userToken !== null ? 
            <DrawerNavigator /> :
            <RootStackNavigator />
          }
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </AppContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});