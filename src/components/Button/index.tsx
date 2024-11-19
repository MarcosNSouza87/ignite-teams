import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
type IButton = TouchableOpacityProps & {
  title: string;
  type?: S.ButtontypeStyleProps;
}
export function Button({title, type='PRIMARY',...rest }: IButton) {
 return (
  <S.Container type={type} {...rest}>
    <S.Title>{title}</S.Title>
  </S.Container>
 );
}