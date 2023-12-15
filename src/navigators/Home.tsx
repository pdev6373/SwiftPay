import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home as HomeScreen} from '../screens/general/home';

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
