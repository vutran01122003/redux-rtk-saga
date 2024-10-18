import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import TaskManagementScreen from "./screens/TaskManagementScreen"
import TaskScreen from "./screens/TaskScreen";
import {Text, TouchableOpacity} from "react-native";
import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({navigation, route}) => ({
        headerLeft: () => {
          return  <TouchableOpacity style={{padding: 20}} onPress={() => {navigation.goBack()}}>
                    <Text style={{fontSize: 25}}>&larr;</Text>
                  </TouchableOpacity>
        },
        headerRight: () => <HeaderComponent username={route.params?.username}/>,
        title: ""
      })}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TaskManagement" component={TaskManagementScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

