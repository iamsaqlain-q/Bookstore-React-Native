import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import {useOrientation} from '../hooks/useOrientation';

const Header = ({navigation}) => {
  const cart = useSelector(state => state.cart.cart);
  const isPortrait = useOrientation() === 'portrait';
  return (
    <View style={styles.headerContainer}>
      <View style={[styles.logoIcon, {paddingLeft: isPortrait ? 0 : '3%'}]}>
        <Ionicons name="book-outline" size={20} color="#fff" />
      </View>
      <View>
        <Text style={styles.logoText}>Bookstore</Text>
      </View>

      <View style={{width: '50%'}}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.cardBackground}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.cartView}>
        <Text style={styles.headerText}>Cart</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ShoppingCart', {orders: cart});
          }}>
          <Ionicons name="cart-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainBackground,
    width: '100%',
    height: 50,
  },

  logoIcon: {
    width: '7%',
  },

  logoText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    color: Colors.mainBackground,
    margin: 5,
    padding: 5,
  },
  cartView: {
    width: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 15,
  },
});
