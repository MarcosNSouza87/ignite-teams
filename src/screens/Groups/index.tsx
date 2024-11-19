import R from 'react';
import * as RN from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
	const [groups, setGroups] = R.useState<string[]>([]);
	return (
		<S.Container>
			<Header />
			<HighLight title="Turmas" subtitle="Jogue com a sua turma" />
			<RN.FlatList
				data={groups}
				keyExtractor={(item) => item}
				renderItem={({ item }) => <GroupCard title={item} onPress={() => {}} />}
				contentContainerStyle={
					groups.length === 0 && { flex: 1}
				}
				ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?"/>}
			/>
			<Button 
				title="Criar nova turma"
			/>
		</S.Container>
	);
}
