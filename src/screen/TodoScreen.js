import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TaskComponent from "../components/Task/TaskComponent";

const styles = StyleSheet.create({
    todoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    headerWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    rightSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    avatarWrapper: {
        height: 60,
        width: 60,
    },
    avatar: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 9999,
    },
    username: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subTitle: {
        color: "gray",
        fontWeight: "bold",
        fontSize: 13,
    },
    searchBar: {
        marginTop: 20,
        flexDirection: "row",
        gap: 5,
        borderWidth: 1,
        width: 334,
        height: 44,
        padding: 10,
        borderRadius: 4,
        borderColor: "#9095A0",
        alignItems: "center",
    },
    buttonAddTask: {
        height: 69,
        width: 69,
        borderRadius: 9999,
        backgroundColor: "#00BDD6",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
});

function TodoScreen({ navigation }) {
    const tasks = [
        "To check email",
        "Ui task web page",
        "Learn js basic",
        "Learn HTML Advance",
        "Medical App UI",
        "Learn Java",
    ];

    return (
        <View style={styles.todoContainer}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <Text style={{ fontSize: 30 }}>&larr;</Text>
                </TouchableOpacity>
                <View style={styles.rightSection}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            style={styles.avatar}
                            source={require("../../assets/images/avatar.jpg")}
                        />
                    </View>
                    <View>
                        <Text style={styles.username}>Hi Twinkle</Text>
                        <Text style={styles.subTitle}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>

            <View style={styles.searchBar}>
                <Image source={require("../../assets/images/Frame (1).png")} />
                <TextInput placeholder="Search" />
            </View>

            <View>
                {tasks.map((task, index) => (
                    <TaskComponent key={index} taskContent={task} />
                ))}
            </View>

            <View style={styles.buttonAddTask}>
                <Image source={require("../../assets/images/Frame (4).png")} />
            </View>
        </View>
    );
}

export default TodoScreen;
