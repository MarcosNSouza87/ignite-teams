import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type IGroupCard = TouchableOpacityProps & {
	title: string;
};
export function GroupCard({ title, ...rest }: IGroupCard) {
	return (
		<S.Container {...rest}>
			<S.Icon />
			<S.Title>{title}</S.Title>
		</S.Container>
	);
}
