import {Text, View} from 'react-native';
import {ArrowUpOnSquareIcon} from 'react-native-heroicons/outline';
import styled from 'styled-components/native';

import Button from '../components/Button';
import IconTextContainerButton from '../components/IconTextContainerButton';
import InputWithIcon from '../components/InputWithIcon';
import MusicPlayer from '../components/MusicPlayer';
import PosterWithText from '../components/PosterWithText';
import ProgressBar from '../components/ProgressLoader';

export default function Components() {
  return (
    <Container
      contentContainerStyle={{
        paddingBottom: 100,
      }}>
      <StyledText>Progress Loader</StyledText>
      <Spacer />
      <ProgressBar />
      <Spacer />
      <Spacer />

      <StyledText>Button</StyledText>
      <Spacer />
      <Button text={'Get Started'} width="200px" />
      <Spacer />
      <Spacer />

      <StyledText>Icon Text Container Button</StyledText>
      <Spacer />
      <IconTextContainerButton
        text="Upload"
        icon={<ArrowUpOnSquareIcon width={26} height={26} stroke={'#fff'} />}
        width="200px"
      />
      <Spacer />
      <Spacer />

      <StyledText>Poster With Text</StyledText>
      <Spacer />
      <PosterWithText image={'https://picsum.photos/780/700'} text="sample" />
      <Spacer />
      <Spacer />

      <StyledText>Input With Icon</StyledText>
      <Spacer />
      <InputWithIcon />
      <Spacer />
      <Spacer />

      <StyledText>Music Player</StyledText>
      <Spacer />
      <MusicPlayer />
      <Spacer />
      <Spacer />
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  padding: 20px;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
  font-family: 'Gothic';
  font-size: 16px;
`;

const Spacer = styled.View`
  height: 10px;
`;
