import {StyleSheet, View} from 'react-native';
import {sizeResponsive} from '../utils';

export type BottomType = {
  children: JSX.Element;
};

export default function Bottom({children}: BottomType) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 'auto',
    padding: sizeResponsive(24),
    gap: sizeResponsive(16),
    paddingBottom: sizeResponsive(36),
    backgroundColor: '#181A20',
    borderTopColor: '#35383F',
    borderTopWidth: 1,
  },
});
