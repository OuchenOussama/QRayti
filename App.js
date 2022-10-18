import { ContextProvider } from './Components/Context';
import Index from './Components/Index';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen options={{headerShown:false}} name="Index" component={Index}/>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}