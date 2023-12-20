import {HomeStackParamList} from '../../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NotificationSettings,
  Notifications,
  Transactions,
} from '../screens/general/home';
import {Home} from '.';

const Stack = createNativeStackNavigator<HomeStackParamList>();
export default function Main() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
      />
      <Stack.Screen name="Transactions" component={Transactions} />
    </Stack.Navigator>
  );
}
