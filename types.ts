export type TextColorType = '#fff' | '#212121' | '#fafafa' | '#e8ece6' | '#eee';

export type TextType = {
  children?: string;
  size: 16 | 18 | 24 | 32 | 40;
  weight: '300' | '400' | '500' | '600' | '700';
  color: TextColorType;
  center?: boolean;
  spacing?: number;
};

export type ButtonStylesType = {
  background: '#A0E86F' | 'transparent';
  borderColor?: '#A0E86F';
};
