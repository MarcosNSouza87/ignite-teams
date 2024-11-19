import React from 'react';
import * as S from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';

export function Groups () {
  return(
    <S.Container>
      <Header />
      <HighLight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
        />
      <GroupCard title="Galera do Ignite" onPress={() => {}}/>
    </S.Container>
  )
}