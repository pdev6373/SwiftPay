import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, Login} from '../screens/auth';

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Get Started" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
