import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const moment = require('moment');
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({ navigation, route }) => {
  const { state, getNews } = useContext(Context);
  // console.log('route ', route);
  // console.log('state ', state);
  useEffect(() => {
    getNews();
    // const listener = navigation.addListener('didFocus', () => {
    //   getNews();
    // });
    // return () => {
    //   listener.remove();
    // };
  }, []);

  const handleOnPress = (id) => {
    navigation.navigate('News', {
      screen: 'Show',
      params: { id: id },
    });
  };

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          const date = new Date(item.date).toString();
          return (
            <TouchableOpacity onPress={() => handleOnPress(item.id)}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <View style={styles.sectionIcon}>
                    <Ionicons
                      name="ios-globe"
                      size={22}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles.sectionTitle}>
                      {item.type === 'MoFo News'
                        ? 'in the news'
                        : item.category}
                    </Text>
                  </View>
                  <Text style={styles.title} key={item.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.date}>
                    {moment(date).format('DD MMM YY')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

// IndexScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
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
  sectionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  date: {
    color: 'grey',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default IndexScreen;
