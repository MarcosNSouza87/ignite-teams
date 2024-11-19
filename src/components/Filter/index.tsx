import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type IFilter = TouchableOpacityProps &
	S.FilterStyleProps & {
		title: string;
	};

export function Filter({ title, isActive = false, ...rest }: IFilter) {
	return (
		<S.Container 
      isActive={isActive}
    {...rest}>
			<S.Title>{title}</S.Title>
		</S.Container>
	);
}
