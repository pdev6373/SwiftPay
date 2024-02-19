import {StyleSheet, View} from 'react-native';
import {Bottom, Button, Text} from '../../components';
import {ButtonStylesType, TextType} from '../../../types';
import Logo from '../../../assets//images/logo.svg';
import {sizeResponsive} from '../../utils';
import {useAuth} from '../../hooks';
import {useNavigation} from '@react-navigation/native';

type ButtonType = {
  children: 'Sign up' | 'Sign in';
  buttonStyles: ButtonStylesType;
  textStyles: TextType;
};

const actions: ButtonType[] = [
  {
    children: 'Sign up',
    buttonStyles: {
      background: 'transparent',
      borderColor: '#A0E86F',
    },
    textStyles: {
      size: 16,
      weight: '700',
      color: '#fff',
      center: true,
    },
  },

  {
    children: 'Sign in',
    buttonStyles: {
      background: '#A0E86F',
      borderColor: '#A0E86F',
    },
    textStyles: {
      size: 16,
      weight: '700',
      color: '#212121',
      center: true,
    },
  },
];

export default function GetStarted() {
  const navigation = useNavigation();

  const authNavHandler = (type: 'signin' | 'signup') =>
    navigation.navigate('Sign In');

  return (
    <View style={styles.wrapper}>
      <View style={styles.main}>
        <Logo width={sizeResponsive(140)} height={sizeResponsive(140)} />

        <View style={styles.textStyles}>
          <Text size={40} weight="700" color="#fff" center>
            Let's Get Started!
          </Text>
          <Text size={18} weight="400" color="#eee" center>
            With SwiftPay, sending and receiving money is easier than ever
            before.
          </Text>
        </View>
      </View>

      <Bottom>
        <>
          {actions.map(action => (
            <Button
              key={action.children}
              buttonStyles={action.buttonStyles}
              textStyles={action.textStyles}
              onPress={() =>
                authNavHandler(
                  action.children === 'Sign in' ? 'signin' : 'signup',
                )
              }>
              {action.children}
            </Button>
          ))}
        </>
      </Bottom>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#181A20',
  },

  main: {
    flex: 1,
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizeResponsive(24),
    gap: sizeResponsive(64),
  },

  textStyles: {
    gap: sizeResponsive(16),
  },
});
