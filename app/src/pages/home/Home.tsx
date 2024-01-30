import { View, Text, Image, TouchableOpacity } from "react-native";
import globalStyles from "../../styles/globalStyles";
import styles from "./styles";

export default function Home({navigation}: any) {
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
          <View style={styles.listContainer}>
            <Text style={globalStyles.title}>Suas Listas:</Text>
            <TouchableOpacity style={globalStyles.roundButton} onPress={() => navigation.navigate('CreateList')}>
            <Image 
              source={require("../../../assets/plus.png")}
            />
          </TouchableOpacity>
          </View>
        </View>
    )
}