import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const BookmarksScreen = () => {
  const { colors } = useTheme(); 

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Bookmarks Screen!</Text>
    </View>
  )
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
