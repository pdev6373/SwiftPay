import 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Auth, Home, Main} from './src/navigators';
import {BooleanType} from './types';
import {useAuth} from './src/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const navTheme = DefaultTheme;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {isLoggedIn} = useAuth();
  const [isUserNew, setIsUserNew] = useState<BooleanType<undefined>>();

  const backgroundColor = isDarkMode ? '#181A20' : '#181A20';
  navTheme.colors.background = backgroundColor;

  useEffect(() => {
    const init = async () => {
      const isUserNew = (await AsyncStorage.getItem(
        'isNew',
      )) as BooleanType<'true'>;
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
        {!isLoggedIn ? <Home /> : <Auth isUserNew={isUserNew} />}
      </NavigationContainer>
    </SafeAreaProvider>
    // </SafeAreaView>
  );
}

export default App;
