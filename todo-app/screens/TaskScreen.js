import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent"
import { postDataApi, putDataApi} from "../utils/fetchData";

export default function TaskScreen({route, navigation}) {
  const {username, setObever, taskData} = route.params;
  const [taskContent, setTaskContent] = useState(taskData?.content ?? "");

  const onFinish = async() => {
    try {
      if(taskData) {
          await putDataApi(`/tasks/${taskData.id}`, { content: taskContent })
        } else {
          await postDataApi("/tasks", {content: taskContent}); 
        }
      setObever(Math.random);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <View styles={{height: "100%"}}>
      <View style={styles.taskContainer}>
          <Text style={styles.title}>{taskData ? `EDIT YOUR TASK` : `ADD YOUR TASK`}</Text>
          
          <View style={styles.inputWrapper}>
            <Image source={require("../assets/job_icon.png")}/>
            <TextInput style={styles.input} placeholder="Input yout job" value={taskContent} onChangeText={setTaskContent} />
          </View>
          

          <TouchableOpacity style={styles.button} onPress={async () => {
            await onFinish();
            navigation.navigate('TaskManagement', {username});
          }}>
            <Text style={{color: "white"}}>GET FINSH &rarr;</Text>
          </TouchableOpacity>

          <Image source={require("../assets/Image_95.png")}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%"
  },

  title: {
    fontWeight: "bold",
    fontSize: 20
  },

  inputWrapper: {
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

  button: {
    backgroundColor: "#00BDD6",
    width: 180,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  }
});