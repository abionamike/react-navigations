import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './screens/navigators/DrawerNavigator';
import { RootStackNavigator } from './screens/navigators/StackNavigator';
import { AuthContext } from './components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    usertoken: null
  }

  const loginReducer = (state, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...state, 
          userToken: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...state, 
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...state, 
          userName: null,
          userToken: null,
          isLoading: false
        }
      case 'REGISTER':
        return {
          ...state, 
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
        
      default:
        return state;
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async (userName, password) => {
      let userToken;
      userToken = null; 
      if(userName === 'user' && password === 'pass') {
        try {
          userToken = 'dfgdg';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (error) {
          console.log(error);
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
      // setUserToken('fgh');
      // setIsLoading(false);
    },
    signOut:async () => {
      try {
        userToken = 'dfgdg';
        await AsyncStorage.removeItem('userToken');

      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'LOGOUT' });
      // setUserToken(null);
      // setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgh');
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'REGISTER', token: userToken });
      // setIsLoading(false);
    }, 1000);
  }, []);
  
  if(loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <View style={styles.container}>
        <NavigationContainer>
          {loginState.userToken !== null ? 
            <DrawerNavigator /> :
            <RootStackNavigator />
          }
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </AuthContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});