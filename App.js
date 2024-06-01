import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ScrollView,} from 'react-native';
import Main from './screens/main';

export default function App() {
  return (
    <Main/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    color:'white',
    fontSize:24,
    fontWeight:'bold'
  },
  description:{
    color:'white',
    fontSize:24,
  }
});
