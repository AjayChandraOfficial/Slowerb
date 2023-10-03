import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParams';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import Header from '../components/Header';
import {noop} from '../utils/functions';

type Props = StackScreenProps<RootStackParamList, 'UploadPreview'>;

export default function UploadPreview({route}: Props) {
  const theme = useTheme();
  // const {audio} = route.params;
  return (
    <Container>
      <Header title="Preview" onPressBack={noop} />

      <MusicPlayer titleText="Sample" />

      <StatusBar barStyle="light-content" backgroundColor={theme.background} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding-horizontal: 24px;
`;
