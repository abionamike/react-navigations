import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmarks Screen!</Text>
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
