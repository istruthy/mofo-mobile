import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
// import { Context } from '../context/BlogContext';
import IconBlock from '../components/IconBlock';
import IconBlockImage from '../components/IconBlogImage';
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
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.halfHeight}
          source={{
            uri: 'https://media2.mofo.com/images/200625-equality-home-page.jpg',
          }}
        >
          <View style={styles.featuredContent}>
            <Text style={styles.headline}>
              &ldquo;We will not be casual observers to injustice. We will do
              more, and we will do it together.&rdquo;
            </Text>
            <Text style={styles.byline}>
              - Larren M. Nashelsky, Chair of Morrison &amp; Foerster
            </Text>
            <Text style={styles.buttonStyle}>
              READ A MESSAGE FROM OUR CHAIR
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.quarterHeight}>
          <View style={styles.containerRow}>
            <TouchableOpacity
              style={styles.halfWidth}
              onPress={() =>
                navigation.navigate('Insights', { id: 'insights' })
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
              onPress={() => navigation.navigate('Index', { id: 'news' })}
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
        <View style={[styles.quarterHeight, { backgroundColor: '#CCC' }]}>
          <View style={styles.containerRow}>
            <IconBlock label="Podcasts" background="#000" icon="microphone" />
            <IconBlock label="Blogs" background="#000" icon="newspaper" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
