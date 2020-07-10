import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

const BlogScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Header navigation={navigation} />
      <View>
        <Text>Blog Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default BlogScreen;
