import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.halfHeight}>
          <View style={styles.featuredContent} >
            <Text style={styles.headline}>&ldquo;We will not be casual observers to injustice. We will do more, and we will do it together.&rdquo;</Text>
            <Text style={styles.byline}>- Larren M. Nashelsky, Chair of Morrison &amp; Foerster</Text>
            <Text style={styles.buttonStyle}>READ A MESSAGE FROM OUR CHAIR</Text>
          </View>
        </View>
        <View style={styles.quarterHeight}>
          <View style={styles.containerRow}>
            <View style={[styles.halfWidth, { backgroundColor: '#CCC' }]}><Text>One</Text></View>
            <View style={styles.halfWidth}><FontAwesome5 name='globe-americas' style={styles.icon} /><Text>In The News</Text></View>
          </View>
        </View>
        <View style={[styles.quarterHeight, { backgroundColor: '#CCC' }]}>
          <View style={styles.containerRow}>
            <View style={styles.halfWidth}><Text>Three</Text></View>
            <View style={styles.halfWidth}><Text>Four</Text></View>
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
    backgroundColor: '#FF3366',
  },
  halfWidth: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  quarterHeight: {
    flex: 1,
    backgroundColor: '#000'
  },
  icon: {
    fontSize: 63,
    color: '#000',
    marginBottom: 10,
  },
  featuredContent: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignContent: 'space-between',
  },
  headline: {
    fontSize: 32,
    fontFamily: 'Georgia',
    fontWeight: '600',
    marginBottom: 10,
  },
  byline: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonStyle: {
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 10,

  }
});

export default HomeScreen;