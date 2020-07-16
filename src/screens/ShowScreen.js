import React, { useState, useEffect, useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const moment = require('moment');
import mofo from '../api/mofo';
import HTML from 'react-native-render-html';
import { Entypo } from '@expo/vector-icons';
// import BottomTabs from '../components/MaterialTab';
// import { Context } from '../context/BlogContext';
import { Context as ContentContext } from '../context/ContentContext';

const ShowScreen = ({ navigation, route }) => {
  const [content, setContent] = useState([]);
  const { people, getPeople } = useContext(ContentContext);
  const [loadingItems, setLoadingItems] = useState(false);
  //todo why is this nested
  console.log('route===============>', route);
  // const id = route.params.id; to do when add footer tab
  const id = route.params.id; // route.params.params.id

  const getContent = async (id) => {
    let response = await mofo.get(`/content-api?cid=${id}&t=insights`);
    let data = response.data;
    console.log('============content.linkedPeople ', data.linkedPeople);
    setContent({
      ...data,
      subtitle: `<p>${data.subtitle}</p>`,
    });
    console.log('current state ', people);
    getPeople(data.linkedPeople);
    setLoadingItems(true);
  };

  useEffect(() => {
    getContent(id);
  }, []);

  useEffect(() => {}, []);

  console.log('linkedPeople ===========>', content.linkedPeople);

  const date = new Date(content.startDate).toString();
  return (
    <>
      {loadingItems ? (
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <View style={styles.sectionIcon}>
              <Text style={styles.sectionTitle}>
                {content.type === 'MoFo News'
                  ? 'in the news'
                  : content.category}
              </Text>
            </View>

            <Text style={styles.headline}>{content.title}</Text>
            <HTML
              html={content.subtitle}
              tagsStyles={{
                em: { fontSize: 20, color: '#fff', marginBottom: 10 },
                p: { fontSize: 20, color: '#fff', marginBottom: 10 },
              }}
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
                li: { fontSize: 16, lineHeight: 28 },
              }}
              style={{ p: { fontSize: 20 } }}
              onLinkPress={(evt, href) => {
                Linking.openURL(href);
              }}
            />
          </ScrollView>
        </View>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="black"
            style={[styles.loadingContainer, styles.loadingHorizontal]}
          />
        </View>
      )}
    </>
  );
};

// ShowScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Edit', { id: navigation.getParam('id') })
//         }
//       >
//         <Entypo name="menu" size={35} />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 2,
  },
  loadingHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  headline: {
    fontSize: RFValue(20),
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
    fontSize: RFValue(14),
    fontFamily: 'Verdana',
  },
});

export default ShowScreen;
