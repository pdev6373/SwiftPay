import {Image, StyleSheet, View} from 'react-native';
import {TransactionsType} from '../../types';
import Timeline from './Timeline';
import Text from './Text';
import {sizeResponsive} from '../utils';

export default function Transactions({
  date,
  transactions,
  id,
}: TransactionsType) {
  return (
    <View key={id} style={styles.transaction}>
      <View style={styles.timelineWrapper}>
        <Timeline date={date} />
      </View>

      <View style={styles.transactionsMain}>
        {transactions.map((transaction, index, array) => (
          <View style={styles.transactionMainWrapper} key={transaction.id}>
            <View key={transaction.id} style={styles.transactionMain}>
              {transaction.image ? (
                <Image
                  source={transaction.image}
                  style={styles.transactionImage}
                />
              ) : (
                <></>
              )}

              <View style={styles.transactionsMainContent}>
                <View style={styles.transactionName}>
                  <Text size={20} weight="600" color="#fff">
                    {transaction.name}
                  </Text>
                  <Text size={12} weight="500" color="#eee" spacing={0.2}>
                    {transaction.time}
                  </Text>
                </View>

                <View style={styles.transactionAmount}>
                  <Text size={20} weight="600" color="#fff">
                    {transaction.amount}
                  </Text>
                  <Text size={12} weight="500" color="#eee" spacing={0.2}>
                    {transaction.type}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={[
                styles.transactionDivider,
                array.length - 1 === index && styles.noBorderBottom,
              ]}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  transaction: {
    gap: sizeResponsive(16),
  },

  timelineWrapper: {
    paddingRight: sizeResponsive(24),
  },

  transactionsMain: {
    gap: sizeResponsive(16),
  },

  transactionMainWrapper: {
    gap: sizeResponsive(16),
  },

  transactionMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },

  transactionsMainContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },

  transactionDivider: {
    borderBottomColor: '#35383F',
    borderBottomWidth: 1,
    marginLeft: sizeResponsive(56) + sizeResponsive(16),
  },

  noBorderBottom: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },

  transactionName: {
    gap: sizeResponsive(4),
  },

  transactionAmount: {
    gap: sizeResponsive(4),
    alignItems: 'flex-end',
    paddingRight: sizeResponsive(24),
  },

  transactionImage: {
    width: sizeResponsive(56),
    height: sizeResponsive(56),
  },
});
