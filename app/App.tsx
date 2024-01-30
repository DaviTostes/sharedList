import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login/Login';
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';
import Register from './src/pages/register/Register';
import Success from './src/pages/success/Success';
import Home from './src/pages/home/Home';
import CreateList from './src/pages/create-list/CreateList';

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
        <Stack.Screen name='Success' component={Success}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='CreateList' component={CreateList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
