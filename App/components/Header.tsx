import {View, Text} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import styled from 'styled-components/native';

interface Props {
  title: string;
  onPressBack: () => void;
}

export default function Header({title, onPressBack}: Props) {
  return (
    <HeaderContainer>
      <ArrowLeftIcon width={26} height={26} stroke="#fff" strokeWidth={1.5} />
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
`;

const HeaderText = styled.Text`
  font-family: 'Gothic-Bold';
  font-size: 24px;
  color: ${({theme}) => theme.text};
  text-align: center;
`;
