import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import { useState } from "react";
import globalStyles from "../../styles/globalStyles";
import theme from "../../themes/theme";
import UnitOfService from "../../services/unitOfService";
import { UserLogin } from "../../interfaces/user";

export default function Login({navigation} : any) {
    const service = new UnitOfService()
    let [login, setLogin] = useState<UserLogin>({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        Keyboard.dismiss()
        
        const result = await service.userService.Login(login)

        if(result.message?.includes('autorizado')) navigation.navigate('Home')
        else alert(result.message)

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
                    onChangeText={(text) => setLogin({...login, email: text})}
                    value={login.email}
                />
                <Text style={globalStyles.formText}>Senha:</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={(text) => setLogin({...login, password: text})}
                    value={login.password}
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