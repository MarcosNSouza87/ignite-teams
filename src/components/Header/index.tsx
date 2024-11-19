import * as S from './styles';
import logoImg from '@assets/logo.png';

interface IHeader {
	showBackButton?: boolean;
}

export function Header({ showBackButton = false }: IHeader) {
	return (
		<S.Container>
			{showBackButton && (
				<S.BackButton>
					<S.BackIcon />
				</S.BackButton>
			)}
			<S.Logo source={logoImg} />
		</S.Container>
	);
}
