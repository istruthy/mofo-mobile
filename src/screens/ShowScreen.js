import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { Context } from '../context/BlogContext';
import mofoContent from '../api/mofoContent';
// import { EvilIcons } from '@expo/vector-icons';
import HTML from 'react-native-render-html';
import { Feather, Ionicons, EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {

  const [content, setContent] = useState([]);
  const id = navigation.getParam('id');

  const getContent = async (id) => {
    let response = await mofoContent.get(`/content-api?cid=${id}`);
    let data = response.data;
    console.log(data);
    setContent(data);
  }

  useEffect(() => {
    getContent(id);
  }, [])

  return <>
    <View style={styles.headerContainer}>
      <View style={styles.sectionIcon}>
        <Ionicons name="ios-globe" size={22} style={{ marginRight: 8, color: '#fff' }} />
        <Text style={styles.sectionTitle}>in the news</Text>
      </View>

      <Text style={styles.headline}>{content.title}</Text>
      <HTML html={content.subtitle} tagsStyles={{ em: { fontSize: 20, color: '#fff' } }} style={styles.subtitle} />
    </View>
    <ScrollView style={styles.container} bounces={true} showsVerticalScrollIndicator={false}>
      <HTML html={content.body} tagsStyles={{ p: { marginTop: 14, marginBottom: 0, fontSize: 18, lineHeight: 26 }, a: { fontSize: 18, lineHeight: 26 } }} />
    </ScrollView>

  </>

}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  p: {
    margin: 0,
  },
  headline: {
    fontSize: 26,
    fontFamily: 'Verdana',
    fontWeight: '600',
    marginBottom: 10,
    marginVertical: 10,
    lineHeight: 30,

    color: '#FFF',

  },
  headerContainer: {
    backgroundColor: '#7FA1DD',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    minHeight: 180,
    // justifyContent: 'center',
  },
  subtitle: {
    fontSize: 30,

  },
  icon: {
    fontSize: 24,

  },
  sectionTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',

  },
  sectionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    color: '#fff',

  }
});


export default ShowScreen;