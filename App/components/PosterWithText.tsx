import {Image, Text} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  text: string;
  image: string;
}

export default function PosterWithText({text, image}: Props) {
  return (
    <ImageContainer>
      <StyledText>{text}</StyledText>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,

          resizeMode: 'cover',
        }}
      />
      <Overlay />
      {/* </Image> */}
    </ImageContainer>
  );
}

const ImageContainer = styled.View`
  width: 150px;
  height: 150px;
  position: relative;
`;

const StyledText = styled.Text`
  color: ${({theme}) => theme.text};
  font-family: 'Gothic-Bold';
  font-size: 16px;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 1;
`;

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.2;
`;
