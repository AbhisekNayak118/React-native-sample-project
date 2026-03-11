import { FlatList, ListRenderItem, StyleSheet, View, Text, Button} from 'react-native';
import React  from 'react';
import Book from '../../components/Book';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { decrement, increment, incrementByAmount } from '../../store/counterReducer';
import styles from './style';

const HomeScreen = () => {
  const {value} = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const {books} = useSelector((state: RootState) => (state.books));

  type BookItem = {
    name_of_book:string,
    author:string,
    cover: string,
    price: string
  }

const renderItem: ListRenderItem<BookItem> = ({item}) => (
  <Book
    author={item.author}
    coverURL={item.cover}
    nameOfBook={item.name_of_book}
    price={item.price}
    categoryColor='#764abc'
  />
);


  return (
    <View style={styles.cont}>
      <Button
        title='Increment'
        onPress={() => dispatch(increment())}
        />
      <Text style={{ marginBottom: 20, marginTop: 30 }}> {value} </Text>
      <Button
        title='Decrement'
        onPress={() => dispatch(decrement())}
        />
      <Button
        title='Increment By Amount'
        onPress={() => dispatch(incrementByAmount(2))}
        />
      
      <FlatList 
        data={books }
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;


