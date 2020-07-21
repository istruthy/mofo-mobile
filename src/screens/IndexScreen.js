import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';

const moment = require('moment');
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({ navigation, route }) => {
  const { state, getNews } = useContext(Context);
  const [refresh, setRefresh] = useState(false);
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    getNews();
    // const listener = navigation.addListener('didFocus', () => {
    //   getNews();
    // });
    // return () => {
    //   listener.remove();
    // };
  }, []);

  const handleOnPress = (id, category) => {
    navigation.navigate('Show', {
      category: category,
      screen: 'ShowTab',
      params: { id: id },
    });
  };

  const handleRefresh = () => {
    setRefresh(false);
    setSeed(seed + 1);
    getNews();
  };

  return (
    <SafeAreaView edges={2} style={styles.container}>
      <FlatList
        data={state}
        refreshing={refresh}
        onRefresh={handleRefresh}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          const date = new Date(item.date).toString();
          return (
            <TouchableOpacity
              onPress={() => handleOnPress(item.id, item.category)}
            >
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
    </SafeAreaView>
  );
};

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
    fontSize: RFValue(16),
    fontFamily: 'Verdana',
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  sectionTitle: {
    textTransform: 'uppercase',
    fontSize: RFValue(12),
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
    fontSize: RFValue(12),
    color: 'grey',
  },
  container: {
    flexDirection: 'column',
    marginTop: 0,
    flex: 1,
  },
});

export default IndexScreen;
