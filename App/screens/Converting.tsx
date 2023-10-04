import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import ProgressLoader from '../components/ProgressLoader';
import {RootStackParamList} from '../navigation/RootStackParams';
import {theme} from '../styles/theme';
import {noop} from '../utils/functions';

type Props = StackScreenProps<RootStackParamList, 'Converting'>;

export default function Converting({navigation}: Props) {
  const onLoadingComplete = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header title="Converting" onPressBack={noop} />

      <ProgressLoader onLoadingComplete={onLoadingComplete} />
      <StatusBar barStyle="light-content" backgroundColor={theme.background} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding-horizontal: 24px;
  padding-top: 24px;
`;
