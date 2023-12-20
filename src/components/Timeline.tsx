import {StyleSheet, View} from 'react-native';
import Text from './Text';
import {sizeResponsive} from '../utils';

type TimelineType = {
  date: string;
};

export default function Timeline({date}: TimelineType) {
  return (
    <View style={styles.transactionDate}>
      <Text size={14} weight="700" color="#9e9e9e" spacing={0.2} capitalize>
        {date}
      </Text>
      <View style={styles.transactionLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  transactionDate: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
    gap: sizeResponsive(16),
  },

  transactionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#35383F',
  },
});
