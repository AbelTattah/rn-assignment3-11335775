// TaskCard

import { View, Text } from 'react-native'
import React from 'react'

const TaskCard = ({task}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.name}>{task}</Text>
    </View>
  )
}

export default TaskCard;

const styles = StyleSheet.create({
    container: {
      flex: 0.11,
      backgroundColor: Colors.secondary200,
      alignItems: 'center',
      padding:2,
      justifyContent: 'center',
    },
    name:{
      color:'black',
      fontSize:24,
      fontWeight:'bold',
      marginRight:130,
    }
  });

