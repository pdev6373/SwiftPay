import {Pressable, StyleSheet, View} from 'react-native';
import Back from '../../assets/images/back.svg';
import Text from './Text';
import {sizeResponsive} from '../utils';
import {TextColorType} from '../../types';
import {useNavigation} from '@react-navigation/native';

type IconType = {
  width: number;
  height: number;
};

type PageHeader = {
  children?: string;
  background?: string;
  color?: TextColorType;
  startIcon?: (...args: IconType[]) => JSX.Element;
  endIcon?: (...args: IconType[]) => JSX.Element;
  onEndIconPress?: () => any;
  onStartIconPress?: () => any;
};

export default function PageHeader({
  children,
  background,
  color,
  startIcon,
  endIcon,
  onEndIconPress,
  onStartIconPress,
}: PageHeader) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: background && background,
      }}>
      <Pressable
        onPress={onStartIconPress ? onStartIconPress : navigation.goBack}
        style={[
          styles.iconWrapper,
          {
            paddingVertical: sizeResponsive(children ? 17 : 22),
          },
        ]}>
        {startIcon ? (
          startIcon({
            width: sizeResponsive(28),
            height: sizeResponsive(28),
          })
        ) : (
          <Back width={sizeResponsive(28)} height={sizeResponsive(28)} />
        )}
      </Pressable>

      <View style={styles.text}>
        {children ? (
          <Text color={color ? color : '#fff'} size={24} weight="700">
            {children}
          </Text>
        ) : (
          <></>
        )}
      </View>

      <Pressable
        onPress={onEndIconPress && onEndIconPress}
        style={[
          styles.iconWrapper,
          {
            paddingVertical: sizeResponsive(children ? 17 : 22),
          },
        ]}>
        {endIcon ? (
          endIcon({
            width: sizeResponsive(28),
            height: sizeResponsive(28),
          })
        ) : (
          <View style={styles.invisible}></View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  invisible: {
    width: sizeResponsive(28),
  },

  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizeResponsive(24),
  },

  text: {
    alignSelf: 'center',
  },
});
