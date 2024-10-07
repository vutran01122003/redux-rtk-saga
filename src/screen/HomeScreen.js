import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    homeContainer: {
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
    },
    titleApp: {
        color: "#8353E2",
        fontWeight: "bold",
        fontSize: 24,
    },
    buttonApp: {
        width: 190,
        height: 44,
        backgroundColor: "#00BDD6",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: "white",
        fontWeight: "regular",
        justifyContent: "center",
        alignItems: "center",
    },
    inputWrapper: {
        flexDirection: "row",
        gap: 5,
        width: 334,
        height: 43,
        borderWidth: 1,
        borderColor: "#9095A0",
        borderRadius: 12,
        alignItems: "center",
        paddingLeft: 15,
    },
    input: {
        fontSize: 16,
        flex: 1,
    },
});

function HomeScreen({ navigation }) {
    return (
        <View style={styles.homeContainer}>
            <View>
                <Image
                    style={styles.imageApp}
                    source={require("../../assets/images/Image 95.png")}
                />
            </View>
            <Text style={styles.titleApp}>MANAGE YOUR TASK</Text>
            <View style={styles.inputWrapper}>
                <Image source={require("../../assets/images/Frame.png")} />
                <TextInput placeholder="Enter your name" style={styles.input} />
            </View>
            <TouchableOpacity
                style={styles.buttonApp}
                onPress={() => navigation.navigate("TodoScreen")}
            >
                <Text style={styles.textButton}>GET STARTED &rarr;</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
