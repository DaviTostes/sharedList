import { StyleSheet } from "react-native";
import theme from "../../themes/theme";

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 5,
        marginTop: 10
    },

    buttonBack: {
        backgroundColor: theme.colors.background
    },

    dotContainer: {
        marginTop: 35
    },
})

export default styles