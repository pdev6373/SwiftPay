import {Text as TextComponent} from 'react-native';
import {TextType} from '../../types';
import {sizeResponsive} from '../utils';

export default function Text({
  children,
  size,
  weight,
  color,
  spacing,
  center = false,
  capitalize = false,
}: TextType) {
  return (
    <TextComponent
      style={{
        fontSize: sizeResponsive(size),
        lineHeight:
          size === 10
            ? sizeResponsive(16)
            : size === 12
            ? sizeResponsive(19.2)
            : size === 14
            ? sizeResponsive(22.4)
            : size === 16
            ? sizeResponsive(25.6)
            : size === 18
            ? sizeResponsive(28.8)
            : size === 20
            ? sizeResponsive(32)
            : size === 24
            ? sizeResponsive(38.4)
            : size === 32
            ? sizeResponsive(51.2)
            : size === 40
            ? sizeResponsive(64)
            : sizeResponsive(76.8),
        textAlign: center ? 'center' : 'left',
        color,
        fontWeight: weight,
        letterSpacing: spacing && sizeResponsive(spacing),
        textTransform: capitalize ? 'capitalize' : 'none',
      }}>
      {children}
    </TextComponent>
  );
}
