import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home as HomeScreen} from '../screens/general/home';
import {sizeResponsive} from '../utils';
import HomeIcon from '../../assets/images/home.svg';
import ContactsIcon from '../../assets/images/contacts.svg';
import ScanIcon from '../../assets/images/scan.svg';
import InsightsIcon from '../../assets/images/insights.svg';
import AccountIcon from '../../assets/images/account.svg';
import {Contacts} from '../screens/general/contacts';
import {View, StyleSheet} from 'react-native';
import {Account} from '../screens/general/account';
import {Insights} from '../screens/general/insights';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#181A20',
          borderTopWidth: 0,
          elevation: 0,
          height: sizeResponsive(64),
        },
        tabBarLabelStyle: {
          color: '#9E9E9E',
          fontSize: sizeResponsive(10),
          fontWeight: '500',
          lineHeight: sizeResponsive(16),
          letterSpacing: sizeResponsive(0.2),
          marginBottom: sizeResponsive(11),
        },
        tabBarIconStyle: {
          marginBottom: sizeResponsive(-11),
        },
        tabBarActiveTintColor: '#A0E86F',
      }}>
      <Tab.Screen
        name="Home Navigator"
        component={HomeScreen}
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
        component={HomeScreen}
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
    marginBottom: 10,
  },
});
