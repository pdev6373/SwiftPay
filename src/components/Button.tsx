import {StyleSheet, Pressable} from 'react-native';
import {Text} from '.';
import {ButtonStylesType, TextType} from '../../types';
import {sizeResponsive} from '../utils';

type Button = {
  children: string;
  buttonStyles: ButtonStylesType;
  textStyles: TextType;
  onPress: () => any;
};

export default function Button({
  children,
  buttonStyles: {background, borderColor},
  textStyles: {size, weight, color},
  onPress,
}: Button) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.wrapper,
        backgroundColor: background,
        borderColor: borderColor,
      }}>
      <Text size={size} weight={weight} color={color}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: sizeResponsive(2),
    borderRadius: sizeResponsive(1000),
    padding: sizeResponsive(14),
  },
});
