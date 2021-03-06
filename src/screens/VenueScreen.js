import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';

import Header from '../components/Header';
const moment = require('moment');
import mofo from '../api/mofo';
import HTML from 'react-native-render-html';
import { Ionicons, Entypo } from '@expo/vector-icons';

const VenueScreen = ({ navigation }) => {
  const [content, setContent] = useState([]);
  const id = navigation.getParam('id');
  const label = navigation.getParam('label');

  const getContent = async (id) => {
    let response = await mofo.get(`/content-api?cid=${id}`);
    let data = response.data;
    setContent(data);
  };

  useEffect(() => {
    getContent(id);
  }, [id]);

  const date = new Date(content.startDate).toString();

  return (
    <SafeAreaView
      forceInset={{ top: 'always', horizontal: 'never', bottom: 'always' }}
      style={{ flex: 1 }}
    >
      <Header navigation={navigation} label={label} />
      <View style={styles.headerContainer}>
        <View style={styles.sectionIcon}>
          <Text style={styles.sectionTitle}>In The News</Text>
        </View>

        <Text style={styles.headline}>{content.title}</Text>
        <HTML
          html={content.subtitle}
          tagsStyles={{
            em: { fontSize: 20, color: '#fff', marginBottom: 10 },
            classesStyles: { subtitle: { color: '#fff' } },
          }}
          style={styles.subtitle}
        />
        <Text style={styles.date}>{moment(date).format('DD MMM YY')}</Text>
      </View>

      <ScrollView
        style={styles.container}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        <HTML
          html={content.body}
          tagsStyles={{
            p: { fontSize: 16, lineHeight: 28, marginBottom: 20 },
            a: { fontSize: 16, lineHeight: 28 },
            h5: { fontSize: 18, fontWeight: 'bold' },
          }}
          style={{ p: { fontSize: 20 } }}
          onLinkPress={(evt, href) => {
            Linking.openURL(href);
          }}
        />
      </ScrollView>
    </SafeAreaView>
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  headline: {
    fontSize: 24,
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
    marginBottom: 10,
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
  date: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Verdana',
  },
});

export default VenueScreen;
