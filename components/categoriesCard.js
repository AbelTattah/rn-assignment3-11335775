// Categories Card

import { View, Text, Image} from 'react-native'
import React from 'react'
import Colors from '../colors/colors'

const CategoriesCard = ({category,count},image="None") => {
  return (
    <View style = {styles.container}>
       <Text style = {styles.name}>{category}</Text>
       <Text style = {styles.count}>{count}</Text>
       {image=="None"?(<></>):(<Image source={require(`../images/${image}`)} style = {styles.image}/>)}
    </View>
  )
}

export default CategoriesCard;

const styles = StyleSheet.create({
    container: {
      flex: 0.15,
      backgroundColor: Colors.secondary100,
      alignItems: 'center',
      padding:2,
      justifyContent: 'center',
    },
    name:{
      color:'black',
      fontSize:24,
      fontWeight:'bold',
      marginRight:130,
    },
    count:{
        color:'black',
        fontSize:13,
        fontWeight:'bold',
        marginRight:130,
    },
    image:{
      width:"80%",
      height:"70%"
    }
  });

