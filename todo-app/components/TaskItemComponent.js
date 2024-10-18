import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {deleteDataApi} from "../utils/fetchData";

function TaskItemComponent({taskId, content, setObever, navigation, username}) {
  
  const deleteTask = async () => {
    await deleteDataApi(`tasks/${taskId}`)
    setObever(Math.random())
  }

    return (
      <View style={styles.taskContainer}>
        <View style={{flexDirection: "row", gap: 10}}>
          <Image source={require("../assets/task_icon.png")}/>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.iconGroup}>
          <TouchableOpacity onPress={deleteTask}>
            <Image style={styles.pointer} source={require("../assets/remove.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
              navigation.navigate('Task', {
                username,
                setObever,
                taskData: {
                  id: taskId, 
                  content
                }
              });
          }}>
            <Image style={styles.pointer} source={require("../assets/edit.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  taskContainer: {
    width: 335,
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    borderRadius: 25,
    marginTop: 10
  },
  
  iconGroup: {
    flexDirection: "row",
    gap: 10
  },

  content: {
    fontWeight: "bold"
  },
 
  pointer: {
    cursor: "pointer"
  }
})

export default TaskItemComponent;
