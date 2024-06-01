import { View, Text ,SafeAreaView} from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View>
        <View></View>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </SafeAreaView>
  )
}

export default Main;


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