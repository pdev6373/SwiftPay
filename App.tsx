import 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Auth, Main} from './src/navigators';

const navTheme = DefaultTheme;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const backgroundColor = isDarkMode ? '#181A20' : '#181A20';
  navTheme.colors.background = backgroundColor;

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
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
        {isLoggedIn ? <Main /> : <Auth />}
      </NavigationContainer>
    </SafeAreaProvider>
    // </SafeAreaView>
  );
}

export default App;
