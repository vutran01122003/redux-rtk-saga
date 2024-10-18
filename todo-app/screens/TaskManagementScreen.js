import { View, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import {useState, useEffect} from "react";
import HeaderComponent from "../components/HeaderComponent";
import TaskItemComponent from "../components/TaskItemComponent";
import { getDataApi } from "../utils/fetchData";

function TaskManagementScreen({route, navigation}) {
  const {username} = route.params;
  const [taskList, setTaskList] = useState([]);
  const [obsever, setObever] = useState(0);
  
  useEffect(() => {
    getDataApi("tasks").then((res)=> {
      setTaskList(res.data);
    })
  }, [obsever])

  return (
    <View>
      <View style={styles.taskContainer}>
        <View style={styles.searchWrapper}>
          <Image source={require("../assets/search.png")}/>
          <TextInput style={styles.input} placeholder="Search" />
        </View>

        <View style={styles.tasksWrapper}>
          {
            taskList.length > 0 &&
            taskList.map(task => <TaskItemComponent key={task.id} taskId={task.id} content={task.content} setObever={setObever}  />)
          }
        </View>

        <TouchableOpacity style={styles.addBtnWrapper} onPress={() => {
          navigation.navigate("Task", { test: "12"})
        }}>
            <Image style={styles.pointer}source={require("../assets/add.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  searchWrapper: {
    flexDirection: "row",
    gap: 5,
    width: 334,
    height: 44,
    borderWidth: 1,
    borderStyle: "solid",
    boderColort: "#9095A0",
    alignItems: "center",
    paddingLeft: 10
  },
  input: {
    outline: "none",
    width: "100%",
    height: "100%",
  },
  tasksWrapper: {
    marginTop: 40
  },
  addBtnWrapper: {
    marginTop: 20
  },
  pointer: {
    cursor: 'pointer'
  }
})

export default TaskManagementScreen;