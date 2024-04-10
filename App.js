import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Помыть посуду', key: '2'},
    {text: 'Пойти на прогулку', key: '3'},
    {text: 'Покормить кота', key: '4'},
  ])
 
  const addHandler = (text) =>{
    setListOfItems((list) =>{
      return[
        {text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }
    
  const deleteHandler = (key) =>{
    setListOfItems((list) =>{
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }
  return (
   <View>
     <Header />
     
     <Form addHandler={addHandler} />  

     <View>
      <FlatList data={listOfItems} renderItem={({item}) =>(
        <ListItem el={item}  deleteHandler={deleteHandler}/>
      )} />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent : 'center',
  },
  
});
 