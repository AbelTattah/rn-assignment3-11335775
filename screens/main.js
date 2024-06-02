import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";
import React from "react";
import TaskCard from "../components/taskCard";
import CategoriesCard from "../components/categoriesCard";
import { Tasks, Categories } from "../tasks/tasks";
import findTask from "../tasks/tasks";
import Colors from "../colors/colors";
import Fonts from "../fonts/fonts";

const Main = () => {
  const [onGoingTasks, setOngoingTasks] = useState(Tasks);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView v style={styles.main}>
        <View style={styles.header}>
          <View style={styles.topCard}>
            <Text style={styles.greeting}>Hello, Devs</Text>
            <Text style={styles.greetingInfo}>
              {onGoingTasks.length} Tasks today
            </Text>
          </View>
          <Image
            source={require("../images/profile_pic.png")}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.search}>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Search"
            style={styles.input}
          ></TextInput>
          <Image
            source={require("../images/filter.png")}
            style={styles.filter}
          />
        </View>
        <Text style={styles.sectionHeader}>Categories</Text>
        <ScrollView horizontal={true} style={styles.categories}>
          {Categories.map((item, index) => {
            return (
              <CategoriesCard category={item} count={findTask(item).length} />
            );
          })}
        </ScrollView>
        <Text style={styles.sectionHeader}>Ongoing Task</Text>
        <ScrollView style={styles.tasks}>
          {onGoingTasks.map((item, index) => {
            return <TaskCard task={item.task} />;
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary100,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "90%",
    height: "100%",
    paddingTop: 13,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    fontFamily: Fonts.primary,
    justifyContent: "space-between",
  },
  topCard: {
    width: "60%",
  },
  profilePic: {
    width: 50,
    height: 52,
  },
  filter: {
    height: 50,
    width: 48,
  },
  greeting: {
    fontSize: 38,
    color: "black",
    fontFamily: Fonts.primary,
  },
  greetingInfo: {
    color: "black",
    fontSize: 14,
    fontFamily: Fonts.primary,
  },
  categories: {
    height: 220,
    gap: 10,
    marginBottom: 30,
    marginTop: 13,
  },
  tasks: {
    flex: 1,
    gap: 10,
    marginTop: 10,
    height: 280,
  },
  search: {
    height: "10%",
    paddingTop: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: "80%",
    backgroundColor: Colors.primary100,
    borderRadius: 10,
    paddingLeft: 15,
    borderWidth: 0.167,
    borderStyle: "solid",
    borderColor: "#ddd",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight:'bold'
  },
});
