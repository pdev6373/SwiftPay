import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

export type TextColorType =
  | '#fff'
  | '#212121'
  | '#fafafa'
  | '#e8ece6'
  | '#eee'
  | '#e0e0e0'
  | '#9e9e9e'
  | '#f5f5f5';

export type TextType = {
  children?: string;
  size: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 40 | 48;
  weight: '300' | '400' | '500' | '600' | '700';
  color: TextColorType;
  center?: boolean;
  capitalize?: boolean;
  spacing?: 0.2;
};

export type ButtonStylesType = {
  background: '#A0E86F' | 'transparent';
  borderColor?: '#A0E86F';
};

export type HomeStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Settings: undefined;
  NotificationSettings: undefined;
  Transactions: undefined;
};

export type HomeType = NativeStackScreenProps<HomeStackParamList>;

type TransactionType = {
  id: number;
  image: ImageSourcePropType;
  name: string;
  time: string;
  amount: string;
  type:
    | 'Sent'
    | 'Incoming Request'
    | 'Top Up'
    | 'Income'
    | 'Outgoing Request'
    | 'Deposit'
    | 'Withdraw';
};

export type TransactionsType = {
  id: number;
  date: string;
  transactions: TransactionType[];
};

type NotificationType = {
  id: number;
  icon: ImageSourcePropType;
  title: string;
  body: string;
  time: string;
  action: 'update' | 'security' | 'request' | 'promotion' | 'offers';
  isRead: boolean;
};

export type NotificationsType = {
  id: number;
  date: string;
  notifications: NotificationType[];
};

export type BooleanType<type> = 'true' | 'false' | type;
