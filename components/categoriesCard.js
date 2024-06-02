// Categories Card

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../colors/colors";
import Fonts from "../fonts/fonts";

const CategoriesCard = ({ category, count, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardText}>
        <Text style={styles.name}>{category}</Text>
        <Text style={styles.count}>{count} Tasks</Text>
      </View>
      {category == "Excercise" ? (
        <Image
          source={require(`../images/excercise.png`)}
          style={styles.image}
        />
      ) : category == "Study" ? (
        <Image
          source={require(`../images/student_sitting.png`)}
          style={styles.image}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary100,
    alignItems: "center",
    padding: 10,
    width: 200,
    height: "100%",
    marginRight: 20,
    borderRadius: 15,
  },
  name: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: Fonts.primary,
  },
  count: {
    color: "black",
    fontSize: 12,
    marginRight: 130,
    fontFamily: Fonts.primary,
  },
  image: {
    width: 150,
    height: 155,
  },
  cardText: {
    width: "100%",
    fontFamily: Fonts.primary,
  },
});
