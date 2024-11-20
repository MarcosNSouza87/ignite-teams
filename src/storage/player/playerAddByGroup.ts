import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playerGetByGroup } from './playlerGetByGroup';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
	try {
		const storedPlayers = await playerGetByGroup(group);

		const playerAlreadyExists = storedPlayers.filter(
			(player) => player.name === newPlayer.name,
		);

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já esta adicionada em um time aqui. ');
    }

    const updateStorage = JSON.stringify([...storedPlayers,newPlayer])

		await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, updateStorage);
	} catch (error) {
		throw error;
	}
}
