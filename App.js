import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import DrawerNavigator from './screens/navigators/DrawerNavigator';
import { RootStackNavigator } from './screens/navigators/StackNavigator';
import AppContext from './context/Context';
import { loginReducer } from './reducers/AppReducer';

const App = () => {
  const initialLoginState = {
    isLoading: false,
    userName: null,
    usertoken: null,
    isDarkTheme: false
  }
  
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#fff',
      text: '#000'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#222',
      text: '#fff',
      placeholder: '#666',
    }
  }

  const theme = state.isDarkTheme ?  CustomDarkTheme : CustomDefaultTheme;
  
  if(initialLoginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} color="#009387" size="large" />
      </View>
    )
  }

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <NavigationContainer theme={theme}>
            {state.userToken !== null ? 
              <DrawerNavigator /> :
              <RootStackNavigator />
            }
          </NavigationContainer>
          <StatusBar style={state.isDarkTheme ? "light" : "dark"} />
        </View>
      </PaperProvider>
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