import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import BookCard from './BookCard';

const CardBox = () => {
  const [books, setBooks] = useState([]);
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
        renderItem={({item, index}) => <BookCard {...item} />}
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
});
