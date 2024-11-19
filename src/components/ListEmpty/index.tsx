import React from 'react';
import * as S from './styles';

type IListEmpty = {
	message: string;
}
export function ListEmpty({ message }: IListEmpty) {
	return (
		<S.Container>
			<S.Message>{message}</S.Message>
		</S.Container>
	);
}
