import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Chip, PageHeader} from '../../../components';
import {TransactionsType} from '../../../../types';
import {Transactions as AllTransactions} from '../../../components';
import Search from '../../../../assets/images/search.svg';
import {sizeResponsive} from '../../../utils';
import {useState} from 'react';
const user = require('../../../../assets/images/user.png');

const transactionHistory: TransactionsType[] = [
  {
    id: 1,
    date: 'today',
    transactions: [
      {
        id: 1,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 2,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
    ],
  },
  {
    id: 2,
    date: 'yesterday',
    transactions: [
      {
        id: 1,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 2,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Incoming Request',
      },
      {
        id: 3,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
    ],
  },
  {
    id: 3,
    date: 'today',
    transactions: [
      {
        id: 1,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 2,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 3,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 4,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 5,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 6,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
    ],
  },
  {
    id: 4,
    date: 'yesterday',
    transactions: [
      {
        id: 1,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 2,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
      {
        id: 3,
        image: user,
        name: 'Kristin Watson',
        time: '09:40 AM',
        amount: '$125.00',
        type: 'Sent',
      },
    ],
  },
];

type TransactionTypesTypeTitle =
  | 'All'
  | 'Income'
  | 'Sent'
  | 'Request'
  | 'Top Up'
  | 'Withdraw';

type TransactionTypesType = {
  title: TransactionTypesTypeTitle;
  active: boolean;
};

export default function Transactions() {
  const [transactionTypes, setTransactionTypes] = useState<
    TransactionTypesType[]
  >([
    {
      title: 'All',
      active: true,
    },
    {
      title: 'Income',
      active: false,
    },
    {
      title: 'Request',
      active: false,
    },
    {
      title: 'Sent',
      active: false,
    },
    {
      title: 'Top Up',
      active: false,
    },
    {
      title: 'Withdraw',
      active: false,
    },
  ]);

  const updateCurrentTransactionTypeHandler = (
    title: TransactionTypesTypeTitle,
  ) =>
    setTransactionTypes(prev =>
      prev.map(transactionType => ({
        title: transactionType.title,
        active: transactionType.title == title ? true : false,
      })),
    );

  return (
    <View style={styles.wrapper}>
      <PageHeader
        endIcon={({width, height}) => <Search width={width} height={height} />}>
        Transaction History
      </PageHeader>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.transactionTypesWrapper}
        contentContainerStyle={styles.transactionTypes}>
        {transactionTypes.map(transactionType => (
          <Pressable
            onPress={() =>
              updateCurrentTransactionTypeHandler(transactionType.title)
            }>
            <Chip active={transactionType.active} key={transactionType.title}>
              {transactionType.title}
            </Chip>
          </Pressable>
        ))}
      </ScrollView>

      <ScrollView
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}>
        <View style={styles.transactions}>
          {transactionHistory.map(transaction => (
            <AllTransactions
              key={transaction.id}
              date={transaction.date}
              id={transaction.id}
              transactions={transaction.transactions}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  transactions: {
    paddingLeft: sizeResponsive(24),
  },

  transactionTypesWrapper: {
    marginBottom: sizeResponsive(14),
    height: 50,
    marginTop: sizeResponsive(12),
  },

  transactionTypes: {
    gap: sizeResponsive(12),
    paddingHorizontal: sizeResponsive(24),
  },

  main: {
    paddingTop: sizeResponsive(14),
  },
});
