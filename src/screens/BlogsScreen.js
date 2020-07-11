import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
const moment = require('moment');
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header';

const blogs = [
  {
    id: 1,
    title: 'Class Dismissed',
    tagline: 'Class Action and Product Insights for Your Business',
    url: 'https://classdismissed.mofo.com/',
    image:
      'https://i2.wp.com/classdismissed.mofo.com/wp-content/uploads/2018/01/01_25_CD_Homepage_600x295v1.jpg?w=600&ssl=1',
  },
  {
    id: 2,
    title: 'Employment Law Commentary',
    tagline: 'Practical Answers to Employment Law Issues',
    url: 'https://elc.mofo.com/',
    image: 'https://media2.mofo.com/images/elcblog-header-image.jpg',
  },
  {
    id: 3,
    title: 'Government Contracts Insights',
    tagline: 'The latest updates and analysis from Morrison & Foerster',
    url: 'http://govcon.mofo.com/',
    image: 'https://govcon.mofo.com/wp-content/uploads/2020/04/covid-1.jpg',
  },
  {
    id: 4,
    title: 'IM Insights',
    tagline:
      'Providing securities and derivatives regulatory updates for investment management industry participants',
    url: 'https://www.mofoiminsights.com/',
    image: '',
  },
  {
    id: 5,
    title: 'Left Coast Appeals',
    tagline: 'Keeping Tabs on the Ninth Circuit',
    url: 'https://leftcoast.mofo.com/',
    image: '',
  },
  {
    id: 6,
    title: 'MOFO Impact',
    tagline: 'Legal and business insights for impact-driven changemakers',
    url: 'https://impact.mofo.com/',
    image:
      'https://impact.mofo.com/wp-content/uploads/2016/09/impact-featured-image.jpg',
  },
  {
    id: 7,
    title: 'MOFO Life Sciences',
    tagline: 'Because No One is Immune to the Law',
    url: 'https://lifesciences.mofo.com/',
    image: 'https://media2.mofo.com/images/life-sciences-featured-image.jpg',
  },
  {
    id: 8,
    title: 'MOFO ReEnforcement',
    tagline: 'The Enforcement Blog',
    url: 'https://www.moforeenforcement.com/',
    image: '',
  },
  {
    id: 9,
    title: 'MOFO Tech',
    tagline: 'At the Intersection of Technology, Law, and Business',
    url: 'https://mofotech.mofo.com/',
    image: 'https://media2.mofo.com/images/testimage.jpg',
  },
  {
    id: 10,
    title: 'MOFO +',
    tagline: 'Making a Positive Impact Together',
    url: 'https://together.mofo.com/',
    image: '',
  },
  {
    id: 11,
    title: 'MOFO @ ITC',
    tagline: 'Tracking Patent Litigation at the ITC',
    url: 'https://mofoatitc.mofo.com/',
    image: '',
  },
  {
    id: 12,
    title: 'Socially Aware',
    tagline: 'The Law and Business of Social Media',
    url: 'https://www.sociallyawareblog.com/',
    image: '',
  },
];

const getURL = (linkUri) => {
  Linking.openURL(linkUri);
  // this.props.onPress && this.props.onPress();
};

const BlogsScreen = ({ navigation }) => {
  const [state, setState] = useState([]);

  const getInsights = async () => {
    // let response = await mofo.get(
    //   `/content-wss?id=1&type=MoFo Event&wss=events&cid=23471`
    // );
    let data = blogs;
    setState(data);
  };

  useEffect(() => {
    getInsights();
    const listener = navigation.addListener('didFocus', () => {
      getInsights();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never', bottom: 'always' }}
    >
      <Header navigation={navigation} />
      <FlatList
        data={state}
        keyExtractor={(insight) => insight.id.toString()}
        renderItem={({ item }) => {
          const date = new Date(item.date).toString();
          return (
            <TouchableOpacity onPress={() => getURL(item.url)}>
              <View style={styles.column}>
                <View style={styles.row}>
                  <View style={{ maxWidth: '80%' }}>
                    <Text style={styles.title} key={item.title}>
                      {item.title}
                    </Text>
                    <Text style={styles.tagline}>{item.tagline}</Text>
                  </View>

                  <View style={styles.sectionIcon}>
                    <FontAwesome5
                      name="chevron-right"
                      color="grey"
                      size={22}
                      style={{ marginRight: 8 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 20,
    margin: 10,
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    color: 'grey',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  sectionTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    fontFamily: 'Verdana',
  },
  tagline: {
    fontSize: 16,
    fontFamily: 'Verdana',
    lineHeight: 22,
  },
  sectionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
});

export default BlogsScreen;
