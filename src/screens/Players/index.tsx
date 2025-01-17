import React, { useEffect, useRef, useState } from 'react';
import RN, { TextInput } from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playlerGetByGroup';
import { playerGetGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { Loading } from '@components/Loading';

interface IPlayers {}

type RouteParams = {
	group: string;
};

export function Players({}: IPlayers) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [newPlayerName, setNewPlayerName] = useState('');
	const [team, setTeam] = React.useState('TIME A');
	const [players, setPlayers] = React.useState<PlayerStorageDTO[]>([]);
	const navigation = useNavigation();
	const route = useRoute();
	const { group } = route.params as RouteParams;

	const newPlayerNameInputRef = useRef<TextInput>(null);

	async function handleAddPlayer() {
		if (newPlayerName.trim().length === 0) {
			return RN.Alert.alert(
				'Nova pessoa',
				'Informe o nome da pessoa para adicionar.',
			);
		}
		const newPlayer = {
			name: newPlayerName,
			team,
		};
		try {
			await playerAddByGroup(newPlayer, group);

			newPlayerNameInputRef.current?.blur();

			setNewPlayerName('');
			fetchPlayerByTeam();
		} catch (error) {
			if (error instanceof AppError) {
				RN.Alert.alert('Nova Pessoa', error.message);
			} else {
				RN.Alert.alert('Nova Pessoa', 'Não foi possivel adicionar.');
			}
		}
	}

	async function fetchPlayerByTeam() {
		try {
			setIsLoading(true);
			const playersByTeam = await playerGetGroupAndTeam(group, team);
			setPlayers(playersByTeam);
		} catch (error) {
			RN.Alert.alert('Pessoas', 'Não foi possivel carregas as pessoas');
		}finally{
			setIsLoading(false);
		}
	}

	async function handlePlayerRemove(playerName: string) {
		try {
			await playerRemoveByGroup(playerName, group);
			fetchPlayerByTeam();
		} catch (error) {
			RN.Alert.alert('Remover pessoa', 'Nao foi possivel remover essa pessoa.');
		}
	}

	async function groupRemove() {
		try {
			await groupRemoveByName(group);
			navigation.navigate('groups');
		} catch (error) {
			RN.Alert.alert('Remover Grupo', 'Não foi possivel remover o grupo.');
		}
	}

	async function handleGroupRemove() {
		RN.Alert.alert('Remover', 'Deseja remover a turma?', [
			{ text: 'Não', style: 'cancel' },
			{ text: 'Sim', onPress: () => groupRemove() },
		]);
	}

	useEffect(() => {
		fetchPlayerByTeam();
	}, [team]);

	return (
		<S.Container>
			<Header showBackButton />
			<HighLight title={group} subtitle="adicione a galera e separe os times" />
			<S.Form>
				<Input
					inputRef={newPlayerNameInputRef}
					value={newPlayerName}
					onChangeText={setNewPlayerName}
					placeholder="Nome da pessoa"
					autoCorrect={false}
					onSubmitEditing={handleAddPlayer}
					returnKeyType="done"
				/>
				<ButtonIcon icon="add" onPress={handleAddPlayer} />
			</S.Form>

			<S.HeaderList>
				<RN.FlatList
					data={['TIME A', 'TIME B']}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Filter
							title={item}
							isActive={item === team}
							onPress={() => setTeam(item)}
						/>
					)}
					horizontal
				/>

				<S.NumbersOfPlayers>{players.length}</S.NumbersOfPlayers>
			</S.HeaderList>
			{isLoading ? (
				<Loading />
			) : (
				<RN.FlatList
					data={players}
					keyExtractor={(item) => item.name}
					renderItem={({ item }) => (
						<PlayerCard
							name={item.name}
							onRemove={() => handlePlayerRemove(item.name)}
						/>
					)}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={[
						{ paddingBottom: 100 },
						players.length === 0 && { flex: 1 },
					]}
					ListEmptyComponent={() => (
						<ListEmpty message="Não há pessoas nesse time" />
					)}
				/>
			)}
			<Button title="Remover turma" type="SECONDARY" onPress={handleGroupRemove} />
		</S.Container>
	);
}
