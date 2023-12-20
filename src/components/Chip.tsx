import {StyleSheet, View} from 'react-native';
import Text from './Text';
import {sizeResponsive} from '../utils';

type ChipsType = {
  children: string;
  active: boolean;
};

export default function Chip({children, active}: ChipsType) {
  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: active ? '#A0E86F' : '#181A20',
          borderColor: active ? '#A0E86F' : '#35383F',
        },
      ]}>
      <Text
        color={active ? '#212121' : '#fff'}
        size={16}
        weight="600"
        spacing={0.2}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: sizeResponsive(20),
    borderRadius: sizeResponsive(1000),
    justifyContent: 'center',
    alignItems: 'center',
    height: sizeResponsive(42),
    borderWidth: 1,
  },
});
