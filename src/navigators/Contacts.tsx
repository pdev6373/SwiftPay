import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Contacts as ContactsScreen} from '../screens/general/contacts';

const Stack = createNativeStackNavigator();

export default function Contacts() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
}
