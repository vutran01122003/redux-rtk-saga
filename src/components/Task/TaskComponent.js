import { Image, Text, View } from "react-native";
import { taskStyles } from "./style";

function TaskComponent({ taskContent }) {
    return (
        <View style={taskStyles.taskItem}>
            <Image source={require("../../../assets/images/Frame (2).png")} />
            <Text style={taskStyles.taskText}>{taskContent}</Text>
            <View>
                <Image source={require("../../../assets/images/Frame (3).png")} />
            </View>
        </View>
    );
}

export default TaskComponent;
