import { StyleSheet } from "react-native";

export const taskStyles = StyleSheet.create({
    taskItem: {
        padding: 10,
        borderRadius: 24,
        backgroundColor: "#DEE1E6",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 335,
        height: 48,
        marginTop: 20,
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    taskText: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26,
    },
});
