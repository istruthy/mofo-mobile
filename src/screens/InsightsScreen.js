import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import mofo from '../api/mofo';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const moment = require('moment');

const InsightsScreen = ({ navigation, route }) => {
  const [state, setState] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [seed, setSeed] = useState(0);

  const getInsights = async () => {
    let response = await mofo.get(
      `/content-wss?id=1&type=MoFo Publications&wss=insights&cid=23461`
    );
    let data = response.data;
    setRefresh(false);
    setState(data);
  };

  useEffect(() => {
    getInsights();
    // const listener = navigation.addListener('didFocus', () => {
    //   getInsights();
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
    setRefresh(true);
    setSeed(seed + 1);
    getInsights();
  };

  return (
    <SafeAreaView edges={2} style={styles.container}>
      <FlatList
        data={state}
        refreshing={refresh}
        onRefresh={handleRefresh}
        keyExtractor={(insight) => insight.id.toString()}
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
  },
});

export default InsightsScreen;
