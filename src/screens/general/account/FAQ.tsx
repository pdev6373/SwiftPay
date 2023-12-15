import {ScrollView, StyleSheet, View} from 'react-native';
import {PageHeader, Text} from '../../../components';
import {sizeResponsive} from '../../../utils';

export default function FAQ() {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Text size={40} weight="700" color="#fff" center>
          Let's Get Started!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // gap: sizeResponsive(12),
  },

  paymentMethod: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // gap: sizeResponsive(16),
    // flexWrap: 'wrap',
    // backgroundColor: '#1F222A',
    // borderRadius: sizeResponsive(12),
    // borderWidth: 1,
    // borderColor: '#35383F',
    // paddingVertical: sizeResponsive(16),
    // paddingLeft: sizeResponsive(20),
    // paddingRight: sizeResponsive(24),
  },

  contentContainerStyle: {
    // paddingHorizontal: sizeResponsive(24),
    // paddingBottom: sizeResponsive(24),
    // gap: sizeResponsive(20),
  },

  paymentMethodMain: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: sizeResponsive(16),
  },
});
