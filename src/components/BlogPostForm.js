import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (<View>
    <Text style={styles.label}>Enter Title:</Text>
    <TextInput style={styles.textInputStyle} value={title} onChangeText={text => setTitle(text)} />

    <Text style={styles.label}>Enter Content:</Text>
    <TextInput style={styles.textInputStyle} value={content} onChangeText={text => setContent(text)} />

    <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />

  </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
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
export default BlogPostForm;