import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { useState } from "react";
import styles from "./styles";
import { CreateListDto } from "../../interfaces/list";
import UnitOfService from "../../services/unitOfService";
import { ReadUserDto } from "../../interfaces/user";

export default function CreateList({navigation} : any) {
    const service = new UnitOfService()
    const [users, setUsers] = useState('')
    const [list, setList] = useState<CreateListDto>({
        name: '',
        authority: 'teste@gmail.com',
        obs: '',
        users: []
    })

    const handleCreateList = async () => {
        setList({...list, users: users.replaceAll(' ', '').split(',')})

        const result = await service.listService.Create(list)
        if(result.message.includes('Sucesso')) navigation.navigate('Home')
        else alert(result.message)
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
            <Text style={globalStyles.title}>Criar Lista:</Text>
            <View style={[globalStyles.formContainer, styles.listFormContainer]}>
                <View>
                    <Text style={globalStyles.formText}>Nome da lista:</Text>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={(text) => setList({...list, name: text})}
                        value={list.name}
                    />
                </View>
                <View>
                    <Text style={globalStyles.formText}>Observações:</Text>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={(text) => setList({...list, obs: text})}
                        value={list.obs}
                    />
                </View>
                <View>
                    <Text style={globalStyles.formText}>Adicionar usuários:</Text>
                    <TextInput 
                        value={users}
                        onChangeText={(text) => setUsers(text)}
                        style={globalStyles.input}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={handleCreateList} style={[globalStyles.button, globalStyles.bigButton]}>
                <Text style={globalStyles.buttonText}>Criar</Text>
            </TouchableOpacity>
        </View>
    )
}