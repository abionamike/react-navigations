import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import ExploreScreen from '../ExploreScreen';
import DetailsScreen from '../DetailsScreen';
import SettingsScreen from '../SettingsScreen';
import BookmarksScreen from '../BookmarksScreen';
import SupportScreen from '../SupportScreen';

const HomeStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTitleAlign: 'center',
      headerLeft: () => <MaterialIcons name="menu" size={28} color="#fff" style={{ marginLeft: 8 }} onPress={() => navigation.openDrawer()} />,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

const ProfileStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTitleAlign: 'center',
      headerLeft: () => <MaterialIcons name="menu" size={28} color="#fff" style={{ marginLeft: 8 }} onPress={() => navigation.openDrawer()} />,
    }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const DetailsStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

const ExploreStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  )
}

const BookmarksStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
    </Stack.Navigator>
  )
}

const SettingsStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

const SupportStackNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Support" component={SupportScreen} />
    </Stack.Navigator>
  )
}

export { HomeStackNavigator, ExploreStackNavigator, ProfileStackNavigator, DetailsStackNavigator, SupportStackNavigator, BookmarksStackNavigator, SettingsStackNavigator };