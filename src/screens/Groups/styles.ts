import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Title = styled.Text`
  color: #0cf;
  font-size: 32px;
`;

