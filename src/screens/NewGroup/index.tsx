import React from 'react';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

interface INewGroup {}
export function NewGroup({}: INewGroup) {
	return (
		<S.Container>
			<Header showBackButton />
			<S.Content>
				<S.Icon />
				<HighLight
					title="Nova turma"
					subtitle="crie a turma par adicionar as pessoas"
				/>
				<Input 
					placeholder='Nome da turma'
				/>
				<S.Space />
				<Button title="Criar" />
			</S.Content>
		</S.Container>
	);
}
