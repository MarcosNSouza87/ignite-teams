import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import logoImg from '@assets/logo.png';

interface IHeader {
	showBackButton?: boolean;
}

export function Header({ showBackButton = false }: IHeader) {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.navigate('groups');
	}

	return (
		<S.Container>
			{showBackButton && (
				<S.BackButton onPress={handleGoBack}>
					<S.BackIcon />
				</S.BackButton>
			)}
			<S.Logo source={logoImg} />
		</S.Container>
	);
}
