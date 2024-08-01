import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Book from '../components/Book';
import axios from 'axios';
import {getBooks} from '../store/bookActions';

const HomeScreen = () => {
  type BookItem = {
    name_of_book: string;
    author: string;
    cover: string;
    price: string;
  };
  const {value} = useSelector((state: RootState) => state.counter);
  const {books} = useSelector((state: RootState) => state.books);
  console.log('books', books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const renderItem: ListRenderItem<BookItem> = ({item}) => (
    <Book
      author={item.author}
      coverURL={item.cover}
      nameOfBook={item.name_of_book}
      price={item.price}
      categoryColor="#764abc"
    />
  );

  return (
    <View style={styles.cont}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});
