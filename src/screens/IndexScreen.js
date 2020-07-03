import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return <View>
    <Text>Index Screen</Text>
    <FlatList
      data={blogPosts}
      key={blogPosts.title}
      keyExtractor={(blogPost) => blogPosts.title}
      renderItem={({ item }) => {
        return <Text key={item.title}>{item.title}</Text>
      }}
    />
  </View>
}

const styles = StyleSheet.create({});

export default IndexScreen;
