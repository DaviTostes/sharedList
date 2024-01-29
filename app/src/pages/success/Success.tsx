import { View, Text, Image, TouchableOpacity } from "react-native";
import globalStyles from "../../styles/globalStyles";
import styles from "./styles";

export default function Success({navigation}: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={globalStyles.title}>Sua conta foi criada</Text>
                <Text style={globalStyles.title}>com sucesso!</Text>
            </View>
            <Image 
                source={require("../../../assets/check-circle.png")}
            />
            <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={globalStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}