import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { useState } from "react";
import styles from "./styles";
import theme from "../../themes/theme";
import User from "../../interfaces/user";
import UnitOfService from "../../services/unitOfService";

export default function Register({navigation}: any) {
    const service = new UnitOfService()
    let [step, setStep] = useState(1)
    let [confirmPassword, setConfirmPassword] = useState('')
    let [user, setUser] = useState<User>({
        email: '',
        username: '',
        password: ''
    })

    const handleRegister = async () => {
        if(user.password === '') {
            alert('Senha em branco...')
            return
        }

        if(user.password != confirmPassword) {
            alert('Senha não coincidem...')
            return
        }

        const result = await service.userService.Create(user)

        if(result.message.includes("Sucesso")) navigation.navigate('Success')
        else alert(result.message)

        Keyboard.dismiss()
    }

    const handleStep = () => {
        switch(step) {
            case 1:
                return (
                    <View style={globalStyles.formContainer}>
                        <Text style={globalStyles.formText}>Dados:</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Nome de usuário..."
                            placeholderTextColor={theme.colors.background}
                            onChangeText={(text) => setUser({...user, username: text})}
                            value={user.username}
                        />
                        <TextInput 
                            style={globalStyles.input} 
                            placeholder="Email..."
                            placeholderTextColor={theme.colors.background}
                            onChangeText={(text) => setUser({...user, email: text})}
                            value={user.email}
                        />
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={globalStyles.button} onPress={() => setStep(2)}>
                                <Text style={globalStyles.buttonText}>Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            case 2:
                return (
                    <View style={globalStyles.formContainer}>
                        <Text style={globalStyles.formText}>Login:</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Senha..."
                            placeholderTextColor={theme.colors.background}
                            onChangeText={(text) => setUser({...user, password: text})}
                            value={user.password}
                        />
                        <TextInput 
                            style={globalStyles.input} 
                            placeholder="Confirmar senha..."
                            placeholderTextColor={theme.colors.background}
                            onChangeText={(text) => setConfirmPassword(text)}
                            value={confirmPassword}
                        />
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={[globalStyles.button, styles.buttonBack]} onPress={() => setStep(1)}>
                                <Text style={globalStyles.buttonText}>Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={globalStyles.button} onPress={handleRegister}>
                                <Text style={globalStyles.buttonText}>Pronto</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
        }
    }

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
            <Text style={globalStyles.title}>Crie sua conta:</Text>
            {handleStep()}
            {
                step === 1
                ? 
                <View style={[styles.buttonsContainer, styles.dotContainer]}>
                    <Image 
                        source={require("../../../assets/dotNow.png")}
                    />
                    <Image 
                        source={require("../../../assets/dot.png")}
                    />
                </View>
                :
                <View style={[styles.buttonsContainer, styles.dotContainer]}>
                    <Image 
                        source={require("../../../assets/dot.png")}
                    />
                    <Image 
                        source={require("../../../assets/dotNow.png")}
                    />
                </View>
            }
        </View>
    )
} 