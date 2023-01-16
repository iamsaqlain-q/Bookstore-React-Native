import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import {addToCart} from '../redux/CartReducer';

const BookCard = props => {
  //console.log('Item in BookCard', props);
  const [changeAddToBag, setChangeAddToBag] = useState(true);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(addToCart(props));
    setChangeAddToBag(false);
  };

  return (
    <View style={{margin: 5}}>
      <Card>
        <View style={styles.coverImg}>
          <Card.Cover source={{uri: props.imageLink}} resizeMode="contain" />
        </View>
        <Card.Content>
          <Text variant="titleLarge" style={{color: '#000'}}>
            {props.title}
          </Text>
          <Text variant="bodyMedium" style={{color: Colors.cardBackground}}>
            by {props.author}
          </Text>
          <Text variant="bodyMedium" style={{color: Colors.cardBackground}}>
            {props.price}
          </Text>
        </Card.Content>
        {changeAddToBag ? (
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.bagBtn}
              onPress={() => {
                handleAddToBag(props);
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
};

export default BookCard;

const styles = StyleSheet.create({
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
