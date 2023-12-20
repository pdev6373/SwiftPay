import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {PageHeader, Text, Transactions} from '../../../components';
import {sizeResponsive} from '../../../utils';
import Send from '../../../../assets/images/send.svg';
import Request from '../../../../assets/images/request.svg';
import Topup from '../../../../assets/images/topup.svg';
import Withdraw from '../../../../assets/images/withdraw.svg';
import More from '../../../../assets/images/more.svg';
import Logo from '../../../../assets/images/logo-dark.svg';
import Notification from '../../../../assets/images/notification.svg';
import {HomeType, TransactionsType} from '../../../../types';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
// import User from '../../../../assets/images/user.png';
const user = require('../../../../assets/images/user.png');

type ActionType = {
  name: 'Send' | 'Request' | 'Top Up' | 'Withdraw';
  icon: JSX.Element;
};

const actions: ActionType[] = [
  {
    name: 'Send',
    icon: <Send width={sizeResponsive(28)} height={sizeResponsive(28)} />,
  },
  {
    name: 'Request',
    icon: <Request width={sizeResponsive(28)} height={sizeResponsive(28)} />,
  },
  {
    name: 'Top Up',
    icon: <Topup width={sizeResponsive(28)} height={sizeResponsive(28)} />,
  },
  {
    name: 'Withdraw',
    icon: <Withdraw width={sizeResponsive(28)} height={sizeResponsive(28)} />,
  },
];

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

export default function Home({navigation}: HomeType) {
  const isDarkMode = useColorScheme() === 'dark';

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('#A0E86F');
      StatusBar.setBarStyle('dark-content');

      return () => {
        StatusBar.setBackgroundColor('#181A20');
        StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
      };
    }, []),
  );

  return (
    <View style={styles.wrapper}>
      <PageHeader
        background="#A0E86F"
        color="#212121"
        startIcon={({width, height}) => <Logo width={width} height={height} />}
        endIcon={({width, height}) => (
          <View>
            <Notification width={width} height={height} />
            <View style={styles.notificationIndicator} />
          </View>
        )}
        onEndIconPress={() => navigation.navigate('Notifications')}>
        SwiftPay
      </PageHeader>

      <View style={styles.top}>
        <View style={styles.topMain}>
          <View style={styles.balance}>
            <Text size={48} weight="700" color="#212121">
              9,645.50
            </Text>
            <View style={styles.currency}>
              <Text size={20} weight="600" color="#212121">
                $
              </Text>
            </View>
          </View>

          <View style={styles.availablePrice}>
            <Text size={14} weight="500" color="#212121" spacing={0.2}>
              Available balance
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          {actions.map(action => (
            <View style={styles.actionWrapper} key={action.name}>
              <View style={styles.action}>
                <View style={styles.actionIcon}>{action.icon}</View>

                <Text size={16} weight="700" color="#212121">
                  {action.name}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.main}>
        <View style={styles.mainHeader}>
          <Text size={24} weight="700" color="#fff">
            Transaction History
          </Text>
          <Pressable
            style={styles.viewAll}
            onPress={() => navigation.navigate('Transactions')}>
            <Text size={16} weight="700" color="#e0e0e0">
              View All
            </Text>
            <More width={sizeResponsive(24)} height={sizeResponsive(24)} />
          </Pressable>
        </View>

        <View style={styles.transactions}>
          {transactionHistory.map(transaction => (
            <Transactions
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

  top: {
    backgroundColor: '#A0E86F',
    alignItems: 'center',
    gap: sizeResponsive(36),
    padding: sizeResponsive(24),
    paddingTop: sizeResponsive(16.5),
  },

  topMain: {
    alignItems: 'center',
  },

  availablePrice: {
    marginTop: sizeResponsive(-3.5),
  },

  balance: {
    flexDirection: 'row',
    gap: sizeResponsive(4),
  },

  currency: {
    paddingVertical: sizeResponsive(12),
  },

  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  actionWrapper: {
    flex: 1,
    alignItems: 'center',
  },

  action: {
    alignItems: 'center',
    gap: sizeResponsive(12),
  },

  actionIcon: {
    padding: sizeResponsive(16),
    borderColor: '#212121',
    borderWidth: 1,
    borderRadius: sizeResponsive(60),
  },

  main: {
    paddingTop: sizeResponsive(24),
    paddingBottom: sizeResponsive(12),
    gap: sizeResponsive(16),
  },

  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizeResponsive(16),
    paddingHorizontal: sizeResponsive(24),
  },

  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },

  transactions: {
    paddingLeft: sizeResponsive(24),
  },

  notificationIndicator: {
    width: sizeResponsive(8),
    height: sizeResponsive(8),
    borderRadius: sizeResponsive(8),
    backgroundColor: '#F75555',
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: sizeResponsive(3),
    marginTop: sizeResponsive(1.5),
  },
});
