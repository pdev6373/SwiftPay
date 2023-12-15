import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Bottom, Button, Input, PageHeader, Text} from '../../components';
import Back from '../../../assets/images/back.svg';
import Unchecked from '../../../assets/images/unchecked.svg';
import {sizeResponsive} from '../../utils';

export default function Login() {
  return (
    <View style={styles.wrapper}>
      <PageHeader />

      <View style={styles.content}>
        <View style={styles.contentText}>
          <Text color="#fff" size={32} weight="700">
            Welcome back 👋
          </Text>
          <Text color="#eee" size={18} weight="400">
            Please enter your email & password to sign in.
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.formContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.formData}>
            <View style={styles.formInput}>
              <Input label="Email" placeholder="Email" autofocus />
              <Input label="Password" placeholder="Password" />
            </View>

            <View style={styles.actions}>
              <Pressable style={styles.rememberButton}>
                <Unchecked
                  width={sizeResponsive(24)}
                  height={sizeResponsive(24)}
                />
                <Text color="#e8ece6" size={18} weight="600">
                  Remember me
                </Text>
              </Pressable>

              <Pressable>
                <Text color="#e8ece6" size={18} weight="700">
                  Forgot password?
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <Pressable style={styles.noAccount}>
            <Text color="#fafafa" size={18} weight="500">
              Don’t have an account?
            </Text>
            <Text color="#e8ece6" size={18} weight="700">
              Sign up
            </Text>
          </Pressable>
        </ScrollView>
      </View>

      <Bottom>
        <Button
          buttonStyles={{
            background: '#A0E86F',
            borderColor: '#A0E86F',
          }}
          textStyles={{
            size: 16,
            weight: '700',
            color: '#212121',
            center: true,
          }}>
          Sign in
        </Button>
      </Bottom>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#181A20',
    gap: sizeResponsive(12),
  },

  content: {
    gap: sizeResponsive(20),
    flex: 1,
  },

  contentText: {
    gap: sizeResponsive(16),
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingHorizontal: sizeResponsive(24),
  },

  formContent: {
    gap: sizeResponsive(32),
    paddingTop: sizeResponsive(12),
    paddingBottom: sizeResponsive(42),
    paddingHorizontal: sizeResponsive(24),
  },

  formData: {
    gap: sizeResponsive(28),
  },

  formInput: {
    gap: sizeResponsive(20),
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: sizeResponsive(24),
  },

  rememberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeResponsive(16),
  },

  line: {
    height: 1,
    backgroundColor: '#35383F',
  },

  noAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: sizeResponsive(8),
  },
});
