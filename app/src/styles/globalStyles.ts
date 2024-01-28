import { StyleSheet } from "react-native";
import theme from "../themes/theme";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.background
    },

    wave: {
        marginBottom: -70
    },

    logo: {
        position: "absolute",
        marginTop: 20,
        width: 77,
        height: 102
    },

    title: {
        fontFamily: theme.fonts.primary,
        fontSize: 32,
        color: "#fff",
        textShadowColor: 'rgba(0, 0, 0, 0.25)', // Cor da sombra
        textShadowOffset: { width: 3, height: 5 }, // Deslocamento da sombra
        textShadowRadius: 4,
    },

    formContainer: {
        width: "90%",
        marginTop: 30,
    },

    formText: {
        color: "#fff",
        marginLeft: 15,
        fontFamily: theme.fonts.primary,
        fontSize: 16
    },

    input: {
        height: 40,
        marginTop: 8,
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: { height: 3, width: 5},
        elevation: 6,
        color: theme.colors.background
    },

    button: {
        backgroundColor: theme.colors.button,
        borderRadius: 15,
        width: 120,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: { height: 3, width: 5},
        elevation: 6,
    },

    buttonText: {
        color: "#fff",
        fontFamily: theme.fonts.primary,
        fontSize: 20
    },
})

export default globalStyles