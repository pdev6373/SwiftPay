import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home, Account, Contacts, Insights} from '.';
import {sizeResponsive} from '../utils';
import HomeIcon from '../../assets/images/home.svg';
import ContactsIcon from '../../assets/images/contacts.svg';
import ScanIcon from '../../assets/images/scan.svg';
import InsightsIcon from '../../assets/images/insights.svg';
import AccountIcon from '../../assets/images/account.svg';
import {
  Animated,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarLabelStyle: StyleProp<TextStyle> = {
  color: '#9E9E9E',
  fontSize: sizeResponsive(10),
  fontWeight: '500',
  lineHeight: sizeResponsive(16),
  letterSpacing: sizeResponsive(0.2),
};

const tabBarStyle: Animated.WithAnimatedObject<ViewStyle> = {
  backgroundColor: '#181A20',
  borderTopWidth: 0,
  elevation: 0,
};

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle,
  tabBarLabelStyle,
};

export default function Main() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home Navigator"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={sizeResponsive(24)}
              height={sizeResponsive(24)}
              stroke={focused ? '#A0E86F' : '#9E9E9E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts Navigator"
        component={Contacts}
        options={{
          title: 'Contacts',
          tabBarIcon: ({focused}) => (
            <ContactsIcon
              width={sizeResponsive(24)}
              height={sizeResponsive(24)}
              stroke={focused ? '#A0E86F' : '#9E9E9E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Insights}
        options={{
          title: 'Hello',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => (
            <View style={styles.scanWrapper}>
              <ScanIcon
                width={sizeResponsive(19)}
                height={sizeResponsive(19)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Insights Navigator"
        component={Insights}
        options={{
          title: 'Insights',
          tabBarIcon: ({focused}) => (
            <InsightsIcon
              width={sizeResponsive(24)}
              height={sizeResponsive(24)}
              stroke={focused ? '#A0E86F' : '#9E9E9E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account Navigator"
        component={Account}
        options={{
          title: 'Account',
          tabBarIcon: ({focused}) => (
            <AccountIcon
              width={sizeResponsive(24)}
              height={sizeResponsive(24)}
              stroke={focused ? '#A0E86F' : '#9E9E9E'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  scanWrapper: {
    backgroundColor: '#A0E86F',
    padding: sizeResponsive(14),
    borderRadius: 50,
  },
});
