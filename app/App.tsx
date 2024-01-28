import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login/Login';
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';
import Register from './src/pages/register/Register';

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
});

if (!fontsLoaded && !fontError) {
    return null;
}

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
