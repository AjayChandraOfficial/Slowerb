import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParams';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import Header from '../components/Header';
import {noop} from '../utils/functions';
import Button from '../components/Button';
import {Spacer} from '../styles/StyledComponents';

type Props = StackScreenProps<RootStackParamList, 'UploadPreview'>;

export default function UploadPreview({route, navigation}: Props) {
  const theme = useTheme();
  // const {audio, name} = route.params;
  return (
    <Container>
      <Header title="Preview" onPressBack={noop} />

      {/* <MusicPlayer titleText={name} audioBlob={audio} /> */}

      <MusicPlayer titleText="Sample" />

      <Spacer size={32} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}>
        <Button
          text="Cancel"
          type="secondary-small"
          width="100px"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Button
          text="Convert"
          type="primary-small"
          width="100px"
          onPress={() => {
            navigation.navigate('Converting');
          }}
        />
      </View>

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
