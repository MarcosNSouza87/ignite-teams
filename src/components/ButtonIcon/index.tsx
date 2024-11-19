import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type IButtonIcon = TouchableOpacityProps & {
	icon: keyof typeof MaterialIcons.glyphMap;
	type?: S.ButtonIconTypeStyledProps;
};

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: IButtonIcon) {
	return (
		<S.Container {...rest}>
			<S.Icon name={icon} type={type} />
		</S.Container>
	);
}
