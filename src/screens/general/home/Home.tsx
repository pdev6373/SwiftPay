import {ScrollView, StyleSheet, View} from 'react-native';
import {PageHeader, Text} from '../../../components';

const actions = [
  {
    name: 'Send',
    icon: '',
  },
  {
    name: 'Request',
    icon: '',
  },
  {
    name: 'Top Up',
    icon: '',
  },
  {
    name: 'Withdraw',
    icon: '',
  },
];

export default function Home() {
  return (
    <View>
      <PageHeader background="#A0E86F" color="#212121">
        SwiftPay
      </PageHeader>

      <ScrollView>
        <View style={styles.top}>
          <View>
            <Text size={40} weight="700" color="#fff">
              9,645.50
            </Text>
            <Text size={40} weight="700" color="#fff">
              $
            </Text>
          </View>

          <Text size={40} weight="700" color="#fff">
            Available balance
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#A0E86F',
  },
});
