import {StyleSheet, TextInput, View} from 'react-native';
import {Text} from '.';
import {sizeResponsive} from '../utils';

type InputType = {
  label: string;
  placeholder: string;
  autofocus?: boolean;
};

export default function Input({
  label,
  placeholder,
  autofocus = false,
}: InputType) {
  return (
    <View style={styles.wrapper}>
      <Text color="#fff" size={18} weight="600">
        {label}
      </Text>
      <TextInput
        autoFocus={autofocus}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9E9E9E"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: sizeResponsive(8),
  },

  input: {
    borderWidth: 1,
    borderColor: '#1F222A',
    backgroundColor: '#1F222A',
    borderRadius: sizeResponsive(12),
    overflow: 'hidden',
    paddingVertical: sizeResponsive(18),
    paddingHorizontal: sizeResponsive(20),
    color: '#FFFFFF',
    fontSize: sizeResponsive(18),
    fontWeight: '600',
    lineHeight: sizeResponsive(29),
    letterSpacing: 0.2,
  },
});
