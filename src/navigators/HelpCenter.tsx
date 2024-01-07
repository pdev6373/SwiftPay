import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GetStarted, Login} from '../screens/auth';
import {ContactSupport, FAQ} from '../screens/general/account';
import {StyleSheet, View} from 'react-native';
import {PageHeader} from '../components';
import {sizeResponsive} from '../utils';

const Tab = createMaterialTopTabNavigator();

export default function Auth() {
  return (
    <View style={styles.wrapper}>
      <PageHeader>Payment Methods</PageHeader>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#181A20',
            marginHorizontal: sizeResponsive(24),
            padding: 0,
            margin: 0,
          },
          tabBarLabelStyle: {
            color: '#fff',
            fontSize: sizeResponsive(18),
            fontWeight: '600',
            lineHeight: sizeResponsive(28.8),
            letterSpacing: sizeResponsive(0.2),
            textTransform: 'none',
            backgroundColor: 'red',
            padding: 0,
            margin: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#A0E86F',
            height: sizeResponsive(4),
          },
          tabBarContentContainerStyle: {
            padding: 0,
            margin: 0,
          },
        }}>
        <Tab.Screen name="FAQ" component={FAQ} />
        <Tab.Screen name="Contact Support" component={ContactSupport} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#181A20',
  },
});
