import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';

const LinkingScreen = ({navigation}) => {
  const Url_Home = 'bookstore://app/homescreen';
  const Url_Cart = 'bookstore://app/cartscreen';
  const Url_Order = 'bookstore://app/orderscreen';
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.alignButtons}>
        <TouchableOpacity
          style={styles.placeOrder}
          onPress={() => Linking.openURL(Url_Home)}>
          <Text style={styles.orderText}>Go To Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.placeOrder}
          onPress={() => {
            Linking.openURL(Url_Cart);
          }}>
          <Text style={styles.orderText}>Go To Cart Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.placeOrder}
          onPress={() => {
            Linking.openURL(Url_Order);
          }}>
          <Text style={styles.orderText}>Go To Order Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.placeOrder}
          onPress={() => {
            Linking.openURL('https://reactnative.dev/');
          }}>
          <Text style={styles.orderText}>Go To Order URL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LinkingScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    //flex: 1,
  },
  placeOrder: {
    backgroundColor: Colors.mainBackground,
    width: '50%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  orderText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  alignButtons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
