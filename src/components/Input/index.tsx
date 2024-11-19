import React from 'react';
import * as S from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
type IInput = TextInputProps & {};
export function Input({ ...rest }: IInput) {
	const { COLORS } = useTheme();
	return (
    <S.Input 
      placeholderTextColor={COLORS.GRAY_300} 
      {...rest} 
    />
  );
}
