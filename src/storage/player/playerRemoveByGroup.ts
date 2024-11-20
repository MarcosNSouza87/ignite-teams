import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playerGetByGroup } from './playlerGetByGroup';
import { playerAddByGroup } from './playerAddByGroup';

export async function playerRemoveByGroup(playerName: string, group: string) {
	try {
		const storage = await playerGetByGroup(group);
		const filtered = storage.filter((player) => player.name !== playerName);

		const updatePlayers = JSON.stringify(filtered);

		await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, updatePlayers);
	} catch (error) {}
}
