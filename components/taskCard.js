// TaskCard

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../colors/colors";
import Fonts from "../fonts/fonts";

const TaskCard = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{task}</Text>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary200,
    alignItems: "center",
    padding: 2,
    height: 90,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    color: "black",
    fontSize: 16,
    marginLeft: 20,
    fontFamily: Fonts.primary,
  },
});
