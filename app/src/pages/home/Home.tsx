import { View, Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

export default function Home() {
    return (
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Home</Text>  
        </View>
    )
}