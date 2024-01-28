import { StyleSheet } from "react-native";
import theme from "../../themes/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        backgroundColor: theme.colors.background
    },

    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
    }
})

export default styles