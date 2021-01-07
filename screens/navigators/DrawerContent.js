import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Text, Avatar, Paragraph, Caption, Switch, TouchableRipple, Title, Drawer } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppContext from '../../context/Context';

const CustomDrawerContent = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const { dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
  
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image size={50} source={require('../../assets/glenco-3.jpg')} />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>Micha_EL</Title>
                <Caption style={styles.caption}>@developedbyMike</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={styles.paragraph}>80</Paragraph>
                <Caption style={[styles.caption, { paddingTop: 5 }]}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={styles.paragraph}>1840</Paragraph>
                <Caption style={[styles.caption, { paddingTop: 5 }]}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({ color, size }) => <MaterialCommunityIcons name="home-outline" size={size} color={color} />}
              onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
              label="Profile"
              icon={({ color, size }) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />}
              onPress={() => navigation.navigate('Profile')}
            />
            <DrawerItem
              label="Bookmarks"
              icon={({ color, size }) => <MaterialCommunityIcons name="bookmark-outline" size={size} color={color} />}
              onPress={() => navigation.navigate('Bookmarks')}
            />
            <DrawerItem
              label="Settings"
              icon={({ color, size }) => <MaterialCommunityIcons name="account-settings-outline" size={size} color={color} />}
              onPress={() => navigation.navigate('Settings')}
            />
            <DrawerItem
              label="Support"
              icon={({ color, size }) => <MaterialCommunityIcons name="account-check-outline" size={size} color={color} />}
              onPress={() => navigation.navigate('Support')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={toggleTheme}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          icon={({ color, size }) => <MaterialCommunityIcons name="exit-to-app" size={size} color={color} />}
          onPress={handleSignOut}
        />
      </Drawer.Section>
    </View>
  )
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});