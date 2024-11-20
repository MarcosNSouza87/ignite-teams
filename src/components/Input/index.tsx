import React from 'react';
import * as S from './styles';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

type IInput = TextInputProps & {

  inputRef?:React.RefObject<TextInput>;
};

export function Input({inputRef,...rest }: IInput) {
	const { COLORS } = useTheme();
	return (
    <S.Input 
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300} 
      {...rest} 
    />
  );
}
