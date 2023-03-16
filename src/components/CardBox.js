import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useOrientation} from '../hooks/useOrientation';
import BookCard from './BookCard';

const CardBox = () => {
  const [books, setBooks] = useState([]);
  const isPortrait = useOrientation() === 'portrait';
  const getBooksData = async () => {
    const url = 'https://mocki.io/v1/3c23d858-a345-462e-b79b-3aad64e47721';
    const response = await axios.get(url);
    const json = response.data;
    setBooks(json);
  };

  useEffect(() => {
    getBooksData();
  }, []);
  return (
    <View style={styles.cardContainer}>
      {isPortrait ? (
        <FlatList
          key={'_'}
          keyExtractor={item => '_' + item.id}
          renderItem={({item, index}) => <BookCard {...item} />}
          data={books}
          numColumns={2}
        />
      ) : (
        <ScrollView>
          <FlatList
            horizontal={true}
            key={'#'}
            keyExtractor={item => '#' + item.id}
            renderItem={({item, index}) => <BookCard {...item} />}
            data={books}
          />
        </ScrollView>
      )}
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
