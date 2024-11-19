import React from 'react';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

interface INewGroup {}

export function NewGroup({}: INewGroup) {
	const [group, setGroup] = React.useState("");
	const navigation = useNavigation();

	function handleNew(){
		navigation.navigate('players', { group });
	}

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
					onChangeText={setGroup}
				/>
				<S.Space />
				<Button title="Criar" onPress={handleNew} />
			</S.Content>
		</S.Container>
	);
}
