import {SetStateAction, Dispatch} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {sizeResponsive} from '../utils';

type SwitchType = {
  active: boolean;
  setActive: () => any;
};

export default function Switch({active, setActive}: SwitchType) {
  return (
    <Pressable
      style={[
        styles.wrappper,
        {
          backgroundColor: active ? '#A0E86F' : '#35383F',
        },
      ]}
      onPress={setActive}>
      <View
        style={[
          styles.indicator,
          active ? styles.activeIndicator : styles.inactiveIndicator,
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrappper: {
    width: sizeResponsive(44),
    height: sizeResponsive(24),
    borderRadius: sizeResponsive(1000),
    justifyContent: 'center',
  },

  indicator: {
    width: sizeResponsive(20),
    height: sizeResponsive(20),
    backgroundColor: '#FFFFFF',
    borderRadius: sizeResponsive(20),
    position: 'absolute',
  },

  activeIndicator: {
    right: sizeResponsive(2),
  },

  inactiveIndicator: {
    left: sizeResponsive(2),
  },
});
