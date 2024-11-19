import React from 'react';
import * as S from './styles';

interface IHighLight {
	title: string;
	subtitle: string;
}

export function HighLight({ title, subtitle }: IHighLight) {
	return (
		<S.Container>
			<S.Title>{title}</S.Title>
			<S.SubTitle>{subtitle}</S.SubTitle>
		</S.Container>
	);
}
