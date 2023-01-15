import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardBox from '../components/CardBox';
import DropDown from '../components/DropDown';
import Header from '../components/Header';
import Colors from '../constants/Colors';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Header navigation={navigation}/>
      </View>
      <View style={styles.dropdown}>
        <View>
          <Text style={styles.bookTxt}>Books(100+ items)</Text>
        </View>
        <View>
          <DropDown />
        </View>
      </View>
      <View style={styles.cards}>
        <CardBox />
      </View>
      {/* <View style={styles.bottom}>
        <BottomPages navigation={navigation} />
      </View> */}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookTxt: {
    color: Colors.cardBackground,
    fontSize: 13,
    fontWeight: '500',
  },
  dropdown: {
    //flex:1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  cards: {
    flex: 11,
  },
  bottom: {
    flex: 0.7,
  },
  header: {
    flex: 1,
  },
});
