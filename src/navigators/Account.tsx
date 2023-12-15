import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Account as AccountScreen,
  AboutSwiftPay,
  AddNewPaymentMethod,
  HelpCenter,
  Language,
  Logout,
  Notification,
  PaymentMethods,
  PersonalInfo,
  PrivacyPolicy,
  Security,
} from '../screens/general/account';

const Stack = createNativeStackNavigator();

export default function Account() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      {/* <Stack.Screen name="Payment Methods" component={PaymentMethods} />
      <Stack.Screen
        name="Add New Payment Method"
        component={AddNewPaymentMethod}
      />
      <Stack.Screen name="Personal Info" component={PersonalInfo} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Help Center" component={HelpCenter} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Stack.Screen name="About SwiftPay" component={AboutSwiftPay} />
      <Stack.Screen name="Logout" component={Logout} /> */}

      {/* <Stack.Screen name="Language" component={Language} /> */}
    </Stack.Navigator>
  );
}
