import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import { useState } from "react";
import globalStyles from "../../styles/globalStyles";
import theme from "../../themes/theme";

export default function Login({navigation} : any) {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const handleLogin = () => {
        alert('oi')
    }

    return (
        <View style={globalStyles.container}>
            <Image 
                source={require("../../../assets/waveLeft.png")}
                style={globalStyles.wave}
            />
            <Image 
                source={require("../../../assets/logo.png")}
                style={globalStyles.logo}
            />
            <Text style={globalStyles.title}>Entre na sua conta:</Text>
            <View style={globalStyles.formContainer}>
                <Text style={globalStyles.formText}>Login:</Text>
                <TextInput 
                    style={globalStyles.input} 
                    placeholder="Email ou usuário..."
                    placeholderTextColor={theme.colors.background}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <Text style={globalStyles.formText}>Senha:</Text>
                <TextInput 
                    style={globalStyles.input} 
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <View style={styles.enterContainer}>
                    <Text style={styles.link}>Esqueci minha senha</Text>
                    <TouchableOpacity onPress={handleLogin} style={globalStyles.button}>
                        <Text style={globalStyles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.registerContainer}>
                <View style={styles.registerTextContainer}>
                    <Text style={globalStyles.title}>Não possui uma</Text>
                    <Text style={globalStyles.title}>conta? É simples.</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Crie uma conta agora</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="inverted" />
        </View>
    )
}