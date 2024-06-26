import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View} from 'react-native';

export default function Form({addHandler}) {
  const [text, setValue] = useState('');
  const onChange = (text) =>{
     setValue(text);
  };
  return (
   <View>
    <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу'/>
    <Button
     title='Добавить Задачу'
     color={'#47b553'} 
     
     onPress={ () => addHandler(text)}
     />
   </View>
  );
}

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginHorizontal: '20%',
    width: '60%',
    marginVertical: 30,
  },

});