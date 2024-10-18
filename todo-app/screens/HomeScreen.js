import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import {useState} from "react";

function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
  
  return (
    <View style={styles.homeContainer}>
      <Image source={require("../assets/Image_95.png")}/>
      <Text style={styles.text}>MANAGE YOUR TASK</Text>

      <View style={styles.inputWrapper}>
        <Image source={require("../assets/Frame.png")}/>
        <TextInput style={styles.input}  placeholder="Enter your name" value={username} onChangeText={setUsername}/>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('TaskManagement', {username})
      }}>
        <Text style={{color: "white"}}>GET STARTED &rarr;</Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around"
  },

  text: {
    color: "#8353E2",
    fontSize: 20,
    fontWeight: "bold"
  },

  inputWrapper: {
    flexDirection: "row",
    gap: 5,
    borderWidth: 1,
    borderStyle: "solid",
    boderColort: "#9095A0",
    borderRadius: 12,
    height: 43,
    width: 300,
    alignItems: "center",
    paddingLeft: 10
  },

  input: {
    outline: "none",
    height: "100%",
    width: "100%"
  },

  button: {
    backgroundColor: "#00BDD6",
    width: 180,
    height: 40,
    color: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default HomeScreen;