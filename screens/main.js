import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import React from "react";
import TaskCard from "../components/taskCard";
import CategoriesCard from "../components/categoriesCard";
import Tasks from "../tasks/tasks";
import { findTask } from "../tasks/tasks";
import Colors from "../colors/colors";

const Main = () => {
  const [onGoingTasks, setOngoingTasks] = useState(findTask("Code"));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        {" "}
        <View style={styles.header}>
          <View style={styles.topCard}>
            <Text style={styles.greeting}>Hello Devs</Text>
            <Text style={styles.greeting}>14 Tasks today</Text>
          </View>
          <Image
            source={require("../images/profile_pic.png")}
            style={styles.profilePic}
          />
        </View>
        <View>
          <TextInput></TextInput>
        </View>
        <Text>Categories</Text>
        <ScrollView horizontal={true} style={styles.categories}>
          {Tasks.map((item, index) => {
            return (
              <CategoriesCard
                category={item.category}
                count={() => findTask(item.category).length}
              />
            );
          })}
        </ScrollView>
        <Text>Ongoing Task</Text>
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
  main:{
    flex:0.9,
    width:"90%"
  },
  header:{
    flexDirection:'row',
    justifyContent:'spacebetween'
  },
  topCard:{
    flex:0.2
  },
  greeting:{
    color:"black"
  },
  categories:{
    flex:0.3,
    gap:10
  },
  tasks:{
    flex:0.3,
    gap:10
  }
});
