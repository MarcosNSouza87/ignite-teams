import React from 'react';
import RN from 'react-native';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useRoute } from '@react-navigation/native';

interface IPlayers {}

type RouteParams = {
	group: string;
}

export function Players({}: IPlayers) {
	const [team, setTeam] = React.useState('TIME A');
	const [players, setPlayers] = React.useState([]);

	const route = useRoute();
	const {group} = route.params as RouteParams;
	const onRemovePlayer = () => {};

	return (
		<S.Container>
			<Header showBackButton />
			<HighLight
				title={group}
				subtitle="adicione a galera e separe os times"
			/>
			<S.Form>
				<Input placeholder="Nome da pessoa" autoCorrect={false} />
				<ButtonIcon icon="add" />
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
			<RN.FlatList
				data={players}
				keyExtractor={(item) => item}
				renderItem={({ item }) => <PlayerCard name={item} onRemove={() => {}} />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[
					{ paddingBottom: 100 },
					players.length === 0 && { flex: 1 },
				]}
				ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time" />}
			/>
      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
		</S.Container>
	);
}
