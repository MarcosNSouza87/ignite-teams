import React from 'react';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
interface IPlayers {}
export function Players({}: IPlayers) {
	return (
		<S.Container>
			<Header showBackButton />
			<HighLight
				title="Nome da turma"
				subtitle="adicione a galera e separe os times"
			/>
			<S.Form>
				<Input placeholder="Nome da pessoa" autoCorrect={false} />
				<ButtonIcon icon="add" />
			</S.Form>
      <Filter title="Time A" isActive/>
		</S.Container>
	);
}
