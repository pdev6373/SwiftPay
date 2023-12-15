import {StyleSheet, View} from 'react-native';
import Back from '../../assets/images/back.svg';
import Text from './Text';
import Add from '../../assets/images/add.svg';
import {sizeResponsive} from '../utils';
import {TextColorType} from '../../types';

type PageHeader = {
  children?: string;
  actionType?: 'add';
  background?: string;
  color?: TextColorType;
};

export default function PageHeader({
  children,
  actionType,
  background,
  color,
}: PageHeader) {
  return (
    <View
      style={{
        ...styles.wrapper,
        paddingVertical: sizeResponsive(children ? 17 : 22),
        backgroundColor: background && background,
      }}>
      <Back width={sizeResponsive(28)} height={sizeResponsive(28)} />
      {children ? (
        <Text color={color ? color : '#fff'} size={24} weight="700">
          {children}
        </Text>
      ) : (
        <></>
      )}
      {actionType === 'add' ? (
        <Add width={sizeResponsive(28)} height={sizeResponsive(28)} />
      ) : (
        <View style={styles.invisible}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizeResponsive(24),
  },

  invisible: {
    width: sizeResponsive(28),
  },
});
