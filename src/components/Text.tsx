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
}: TextType) {
  return (
    <TextComponent
      style={{
        fontSize: sizeResponsive(size),
        lineHeight:
          size === 16
            ? sizeResponsive(25.6)
            : size === 18
            ? sizeResponsive(28.8)
            : size === 24
            ? sizeResponsive(38.4)
            : size === 32
            ? sizeResponsive(51.2)
            : sizeResponsive(64),
        textAlign: center ? 'center' : 'left',
        color,
        fontWeight: weight,
        letterSpacing: spacing && spacing,
      }}>
      {children}
    </TextComponent>
  );
}
