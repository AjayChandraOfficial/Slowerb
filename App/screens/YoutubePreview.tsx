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
import InputWithIcon from '../components/InputWithIcon';
import {theme} from '../styles/theme';

type Props = StackScreenProps<RootStackParamList, 'YoutubePreview'>;

export default function YoutubePreview({navigation}: Props) {
  const theme = useTheme();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container
      contentContainerStyle={{
        paddingBottom: 100,
      }}>
      <Header title="Preview" onPressBack={goBack} />

      <Spacer size={12} />

      {/* <MusicPlayer titleText={name} audioBlob={audio} /> */}

      <InputWithIcon placeholder="Paste a link" />

      <Spacer size={52} />

      <MusicPlayer
        titleText="5:30pm"
        authorText="The Deli"
        image="https://picsum.photos/400/450"
      />

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
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          text="Convert"
          type="primary-small"
          width="100px"
          onPress={() => navigation.navigate('Converting')}
        />
      </View>

      <StatusBar barStyle="light-content" backgroundColor={theme.background} />
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding-horizontal: 24px;
  padding-top: 24px;
`;
