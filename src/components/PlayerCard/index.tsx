import React from 'react';
import * as S from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

interface IPlayerCard {
	name: string;
  onRemove:() => void;
}
export function PlayerCard({ name,onRemove }: IPlayerCard) {
	return (
		<S.Container>
			<S.Icon name="person"></S.Icon>
			<S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove}/>
		</S.Container>
	);
}
