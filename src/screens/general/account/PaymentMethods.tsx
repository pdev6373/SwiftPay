import {
  View,
  ScrollView,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';
import {PageHeader, Text} from '../../../components';
import {sizeResponsive} from '../../../utils';
// import paypal from '../../../../assets/images/paypal.png'
const paypal = require('../../../../assets/images/paypal.png');
const google = require('../../../../assets/images/google.png');
const apple = require('../../../../assets/images/apple.png');
const mastercard = require('../../../../assets/images/mastercard.png');
const visa = require('../../../../assets/images/visa.png');

type PaymentMethodType = {
  icon: ImageSourcePropType;
  type: string;
  status: 'Connected' | 'Not Connected';
};

const paymentMethods: PaymentMethodType[] = [
  {
    icon: paypal,
    type: 'PayPal',
    status: 'Connected',
  },
  {
    icon: google,
    type: 'Google Pay',
    status: 'Connected',
  },
  {
    icon: apple,
    type: 'Apple Pay',
    status: 'Connected',
  },
  {
    icon: mastercard,
    type: '•••• •••• •••• •••• 4679',
    status: 'Connected',
  },
  {
    icon: visa,
    type: '•••• •••• •••• •••• 5567',
    status: 'Connected',
  },
];

export default function PaymentMethods() {
  return (
    <View style={styles.wrapper}>
      <PageHeader actionType="add">Payment Methods</PageHeader>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        {paymentMethods.map(paymentMethod => (
          <View key={paymentMethod.type} style={styles.paymentMethod}>
            <View style={styles.paymentMethodMain}>
              {paymentMethod.icon ? (
                <Image
                  source={paymentMethod.icon}
                  style={{
                    width: sizeResponsive(60),
                    height: sizeResponsive(60),
                  }}
                />
              ) : (
                <></>
              )}

              <Text color="#fff" size={18} weight="700">
                {paymentMethod.type}
              </Text>
            </View>

            <Text color="#e8ece6" size={18} weight="700" spacing={0.2}>
              {paymentMethod.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#181A20',
    gap: sizeResponsive(12),
  },

  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizeResponsive(16),
    flexWrap: 'wrap',
    backgroundColor: '#1F222A',
    borderRadius: sizeResponsive(12),
    borderWidth: 1,
    borderColor: '#35383F',
    paddingVertical: sizeResponsive(16),
    paddingLeft: sizeResponsive(20),
    paddingRight: sizeResponsive(24),
  },

  contentContainerStyle: {
    paddingHorizontal: sizeResponsive(24),
    paddingBottom: sizeResponsive(24),
    gap: sizeResponsive(20),
  },

  paymentMethodMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },
});
