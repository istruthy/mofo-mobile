import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';

import mofo from '../api/mofo';
import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';
import { Ionicons, Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const [content, setContent] = useState([]);
  const id = navigation.getParam('id');

  const getContent = async (id) => {
    let response = await mofo.get(`/content-api?cid=${id}`);
    let data = response.data;
    console.log(data);
    setContent(data);
  };

  useEffect(() => {
    getContent(id);
  }, []);

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.sectionIcon}>
          {/* <Ionicons
            name="ios-globe"
            size={22}
            style={{ marginRight: 8, color: '#fff' }}
          /> */}
          <Text style={styles.sectionTitle}>in the news</Text>
        </View>

        <Text style={styles.headline}>{content.title}</Text>
        <HTML
          html={content.subtitle}
          tagsStyles={{ em: { fontSize: 20, color: '#fff' } }}
          style={styles.subtitle}
        />
      </View>
      <ScrollView
        style={styles.container}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        <HTML
          html={content.body}
          style={{ p: { fontSize: 20 } }}
          onLinkPress={(evt, href) => {
            Linking.openURL(href);
          }}
        />
      </ScrollView>
    </>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <Entypo name="menu" size={35} />
      </TouchableOpacity>
    ),
  };
};

const contentStyles = StyleSheet.create({
  p: { marginTop: 0, marginBottom: 0, fontSize: 16, lineHeight: 26 },
  a: { fontSize: 16, lineHeight: 26 },
});

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
    minHeight: 200,
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
    fontFamily: 'Verdana',
  },
  sectionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    color: '#fff',
  },
  contentStyles: {
    fontSize: 20,
  },
});

export default ShowScreen;
