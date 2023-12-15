import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Insights as InsightsScreen} from '../screens/general/insights';

const Stack = createNativeStackNavigator();

export default function Insights() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Insights" component={InsightsScreen} />
    </Stack.Navigator>
  );
}
