import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { useState } from "react";
import styles from "./styles";

export default function CreateList({navigation} : any) {
    const [name, setName] = useState('')

    return (
        <View style={globalStyles.container}>
            <Image 
                source={require("../../../assets/waveRight.png")}
                style={globalStyles.wave}
            />
            <Image 
                source={require("../../../assets/logo.png")}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.title}>Criar Lista:</Text>
            <View style={[globalStyles.formContainer, styles.listFormContainer]}>
                <Text style={globalStyles.formText}>Nome da lista:</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Text style={globalStyles.formText}>Adicionar usuários:</Text>
                <TextInput
                    style={globalStyles.input}
                />
            </View>
            <TouchableOpacity style={[globalStyles.button, globalStyles.bigButton]}>
                <Text style={globalStyles.buttonText}>Criar</Text>
            </TouchableOpacity>
        </View>
    )
}