import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

export default function Header() {
  
  return (
   <View style ={styles.main}>
     <Text style ={styles.text}>Список дел</Text>
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
    main:{
        paddingTop: 50,
        height: 100,
        backgroundColor: 'silver'
    },
    text:{
        fontSize: 24,
        textAlign: 'center',
    }
});
 