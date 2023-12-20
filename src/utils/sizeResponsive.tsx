import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export default function sizeResponsive(size: number) {
  return width > 400 ? size : size < 0 ? size * 1.2 : size * 0.8;
}
