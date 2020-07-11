import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
// import { Context } from '../context/BlogContext';
import IconBlock from '../components/IconBlock';
import IconBlockImage from '../components/IconBlogImage';
import HeroBlock from '../components/HeroBlock';
const insightsImage = require('../../assets/insights.jpg');
const newsImage = require('../../assets/news.jpg');

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    // getBlogPosts();
    // const listener = navigation.addListener('didFocus', () => {
    //   getBlogPosts();
    // });
    // return () => {
    // }
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Header navigation={navigation} />
      <View style={styles.container}>
        <HeroBlock />

        <View style={styles.quarterHeight}>
          <View style={styles.containerRow}>
            <TouchableOpacity
              style={styles.halfWidth}
              onPress={() =>
                navigation.navigate('InsightsScreen', { id: 'insights' })
              }
            >
              <IconBlockImage
                label="Insights"
                backgroundImage={insightsImage}
                icon="eye"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.halfWidth}
              onPress={() => navigation.navigate('IndexScreen', { id: 'news' })}
            >
              <IconBlockImage
                label="In The News"
                background="#fff"
                icon="globe-americas"
                backgroundImage={newsImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.quarterHeight}>
          <View style={styles.containerRow}>
            <TouchableOpacity
              style={styles.halfWidth}
              onPress={() =>
                navigation.navigate('PodcastsScreen', { id: 'news' })
              }
            >
              <IconBlock
                label="Podcasts"
                background="#39A9C3"
                icon="microphone"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.halfWidth}
              onPress={() => navigation.navigate('BlogsScreen', { id: 'news' })}
            >
              <IconBlock label="Blogs" background="#001232" icon="newspaper" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#184492',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
  },
  halfHeight: {
    flex: 2,
    flexDirection: 'column',
  },
  halfWidth: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  quarterHeight: {
    flex: 1,
    backgroundColor: '#000',
  },
  icon: {
    fontSize: 63,
    color: '#000',
    marginBottom: 10,
  },
  featuredContent: {
    justifyContent: 'space-around',
    flex: 1,
    margin: 20,
  },
  headline: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Georgia',
    fontWeight: '600',
  },
  byline: {
    fontSize: 20,
    color: '#fff',
  },
  buttonStyle: {
    borderColor: '#FFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
  },
});

export default HomeScreen;
