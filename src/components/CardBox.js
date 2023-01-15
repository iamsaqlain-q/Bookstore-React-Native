import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import {addToCart} from '../redux/CartReducer';

const CardBox = () => {
  const [books, setBooks] = useState([]);
  const [changeAddToBag, setChangeAddToBag] = useState(true);
  //const cart = useSelector(state => state.cart.cart);
  //console.log('Cart', cart);
  const dispatch = useDispatch();

  const handleAddToBag = item => {
    dispatch(addToCart(item));
    setChangeAddToBag(false);
  };

  const getBooksData = async () => {
    const url = 'https://mocki.io/v1/3c23d858-a345-462e-b79b-3aad64e47721';
    const response = await axios.get(url);
    const json = response.data;
    setBooks(json);
  };
  // const fetchBookData = async () => {
  //   const url = 'https://mocki.io/v1/3c23d858-a345-462e-b79b-3aad64e47721';
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setBooks(json);
  // };

  useEffect(() => {
    // fetchBookData();
    getBooksData();
  }, []);
  //console.log('books', books);
  return (
    <View style={styles.cardContainer}>
      <FlatList
        data={books}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 5}}>
              <Card>
                <View style={styles.coverImg}>
                  <Card.Cover source={{uri: item.imageLink}} />
                </View>
                <Card.Content>
                  <Text variant="titleLarge" style={{color: '#000'}}>
                    {item?.title}
                  </Text>
                  <Text
                    variant="bodyMedium"
                    style={{color: Colors.cardBackground}}>
                    by {item.author}
                  </Text>
                  <Text
                    variant="bodyMedium"
                    style={{color: Colors.cardBackground}}>
                    {item.price}
                  </Text>
                </Card.Content>
                {changeAddToBag ? (
                  <View style={styles.btnView}>
                    <TouchableOpacity
                      style={styles.bagBtn}
                      onPress={() => {
                        handleAddToBag(item);
                      }}>
                      <Text style={styles.addBtnText}>Add To Bag</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.addBtn}>
                      <Text style={styles.wishlistText}>Wishlist</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.btnView}>
                    <TouchableOpacity style={styles.addedbagBtn}>
                      <Text style={styles.addBtnText}>Added</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    margin: 7,
    flexDirection: 'row',
  },
  coverImg: {
    width: 140,
    margin: 10,
  },
  btnView: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bagBtn: {
    width: '70%',
    backgroundColor: Colors.mainBackground,
    margin: 5,
    borderRadius: 5,
  },
  addBtnText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 11,
  },
  addBtn: {
    width: '70%',
    backgroundColor: '#999',
    margin: 5,
    borderRadius: 5,
  },
  wishlistText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 11,
  },
  addedbagBtn: {
    width: '70%',
    backgroundColor: 'navy',
    margin: 5,
    borderRadius: 5,
  },
});
