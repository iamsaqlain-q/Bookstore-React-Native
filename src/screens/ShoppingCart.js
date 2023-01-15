import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomerForm from '../components/CustomerForm';
import Header from '../components/Header';
import Colors from '../constants/Colors';

const ShoppingCart = ({navigation, route}) => {
  const orderList = route.params?.orders || [];
  //console.log('orderList', orderList);
  const [showOrderButton, setShowOrderButton] = useState(true);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const handleOrderButton = () => {
    setShowOrderButton(false);
    setShowCustomerForm(true);
  };
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.cartContainer}>
          <View>
            <Text style={styles.mycart}>My cart(2)</Text>
          </View>
          <View>
            {orderList.map(item => (
              <View style={styles.rowView} key={item.id}>
                <View style={styles.rowView}>
                  <Image
                    source={{uri: item.imageLink}}
                    style={{width: 100, height: 150}}
                  />
                </View>
                <View>
                  <View style={{margin: 15}}>
                    <Text style={{color: '#000'}}>{item.title}</Text>
                    <Text style={{color: Colors.cardBackground}}>
                      {item.author}
                    </Text>
                    <Text style={styles.priceTxt}>{item.price}</Text>
                  </View>
                  <View style={styles.rowView}>
                    <TouchableOpacity>
                      <View style={styles.roundBtn}>
                        <Text style={styles.roundBtnText}>-</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.countView}>
                      <Text style={styles.roundBtnText}>1</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={styles.roundBtn}>
                        <Text style={styles.roundBtnText}>+</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View>
            {showOrderButton ? (
              <TouchableOpacity
                style={styles.placeOrder}
                onPress={handleOrderButton}>
                <Text style={styles.orderText}>Place Order</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        <View style={styles.customerContainer}>
          <View style={{}}>
            <Text style={styles.customerText}>Customer Details</Text>
            {showCustomerForm ? <CustomerForm /> : null}
          </View>
        </View>

        <View style={styles.customerContainer}>
          <Text style={styles.customerText}>Order Summary</Text>
          {showCustomerForm ? (
            <View style={styles.rowView}>
              <View style={styles.columnView}>
                <Image
                  source={require('../assets/dontmakemethink.jpg')}
                  style={{width: 100, height: 150}}
                />
              </View>
              <View>
                <View style={{margin: 15}}>
                  <Text style={{color: '#000'}}>Don't Make Me Think</Text>
                  <Text style={{color: Colors.cardBackground}}>
                    by Steve Krug
                  </Text>
                  <Text style={styles.priceTxt}>Rs 1500</Text>
                </View>
              </View>
            </View>
          ) : null}
          <View>
            {!showOrderButton ? (
              <TouchableOpacity
                style={styles.placeOrder}
                onPress={() => {
                  navigation.navigate('OrderPlaced');
                }}>
                <Text style={styles.orderText}>Checkout</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Text style={styles.bookTxt}>
          Copyright @ 2023, Bookstore Private Limited. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};
export default ShoppingCart;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookTxt: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  cartContainer: {
    //flex: 11,
    borderWidth: 0.3,
    borderColor: Colors.cardBackground,
    margin: 10,
    padding: 10,
  },
  mycart: {
    color: '#000',
    fontSize: 17,
    marginBottom: 15,
  },
  priceTxt: {
    color: Colors.mainBackground,
    fontSize: 15,
    fontWeight: 'bold',
  },
  roundBtn: {
    width: 30,
    height: 30,
    marginLeft: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  roundBtnText: {
    color: Colors.cardBackground,
    fontSize: 20,
    textAlign: 'center',
  },
  countView: {
    width: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 15,
    borderColor: Colors.cardBackground,
  },
  placeOrder: {
    backgroundColor: Colors.mainBackground,
    width: '40%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  orderText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  customerContainer: {
    borderWidth: 0.3,
    borderColor: Colors.cardBackground,
    margin: 10,
    padding: 10,
  },
  customerText: {
    color: Colors.cardBackground,
    fontSize: 17,
    marginBottom: 5,
  },
  bottom: {
    backgroundColor: '#231709',
    justifyContent: 'center',
    width: '100%',
    height: '7%',
  },
  header: {
    //flex: 1,
  },
  rowView: {
    flexDirection: 'row',
  },
  columnView: {
    flexDirection: 'column',
  },
});
