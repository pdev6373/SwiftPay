import 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Auth, Main} from './src/navigators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Onboarding} from './src/screens';

const navTheme = DefaultTheme;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserNew, setIsUserNew] = useState<'true' | 'false'>();

  const backgroundColor = isDarkMode ? '#181A20' : '#181A20';
  navTheme.colors.background = backgroundColor;

  useEffect(() => {
    const init = async () => {
      const isUserNew = (await AsyncStorage.getItem('isNew')) as
        | 'true'
        | 'false';
      setIsUserNew(isUserNew);
    };

    init().finally(async () => await BootSplash.hide({fade: true}));
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <NavigationContainer theme={navTheme}>
        {isLoggedIn ? <Main /> : isUserNew ? <Onboarding /> : <Auth />}
      </NavigationContainer>
    </SafeAreaProvider>
    // </SafeAreaView>
  );
}

export default App;
