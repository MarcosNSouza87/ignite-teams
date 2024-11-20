import React, { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import * as RN from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

export function Groups() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [groups, setGroups] = useState<string[]>([]);
	const navigation = useNavigation();

	function handleNewGroup() {
		navigation.navigate('new');
	}

	async function fetchGroups() {
		try {
			setIsLoading(true);
			const data = await groupsGetAll();
			setGroups(data);
		} catch (error) {
			RN.Alert.alert('Turmas', 'Não foi possivel carregas as turmas');
		} finally {
			setIsLoading(false);
		}
	}
	useFocusEffect(
		useCallback(() => {
			console.log('effect executou');
			fetchGroups();
		}, []),
	);

	function handleOpenGroup(group: string) {
		navigation.navigate('players', { group });
	}

	return (
		<S.Container>
			<Header />
			<HighLight title="Turmas" subtitle="Jogue com a sua turma" />
			{isLoading ? (
				<Loading />
			) : (
				<RN.FlatList
					data={groups}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<GroupCard title={item} onPress={() => handleOpenGroup(item)} />
					)}
					contentContainerStyle={groups.length === 0 && { flex: 1 }}
					ListEmptyComponent={() => (
						<ListEmpty message="Que tal cadastrar a primeira turma?" />
					)}
				/>
			)}
			<Button title="Criar nova turma" onPress={handleNewGroup} />
		</S.Container>
	);
}
