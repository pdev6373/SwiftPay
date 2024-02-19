import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, SignIn, Onboarding} from '../screens/auth';
import {BooleanType} from '../../types';

const Stack = createNativeStackNavigator();

type AuthType = {
  isUserNew: BooleanType<undefined>;
};

export default function Auth({isUserNew}: AuthType) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isUserNew ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <></>
      )}
      <Stack.Screen name="Get Started" component={GetStarted} />
      <Stack.Screen name="Sign In" component={SignIn} />
    </Stack.Navigator>
  );
}
