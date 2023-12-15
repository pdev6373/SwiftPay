import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default function sizeResponsive(size: number) {
  return width > 420 ? size : size * 0.85;
}
