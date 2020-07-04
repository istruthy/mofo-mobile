import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
// import { Feather } from '@expo/vector-icons';


const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return <View>
    <Text style={styles.label}>Enter Title:</Text>
    <TextInput style={styles.textInputStyle} value={title} onChangeText={text => setTitle(text)} />

    <Text style={styles.label}>Enter Content:</Text>
    <TextInput style={styles.textInputStyle} value={content} onChangeText={text => setContent(text)} />

    <Button title="Add Blog Post"
      onPress={() => addBlogPost(title, content, () => {
        navigation.navigate('Index');
      })} />

  </View>
}


const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: 15,
    padding: 10,
    marginVertical: 10

  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    marginVertical: 10
  }
});

export default CreateScreen;