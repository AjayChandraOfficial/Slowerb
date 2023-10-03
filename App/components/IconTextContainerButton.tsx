import {TouchableHighlight, View} from 'react-native';
import styled from 'styled-components/native';
import {noop} from '../utils/functions';

interface ButtonProps {
  text: string;
  width?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

export default function IconTextContainerButton(props: ButtonProps) {
  const {text, width = '100%', icon, onPress = noop} = props;

  return (
    <StyledTouchable width={width} onPress={onPress} activeOpacity={0.9}>
      <Container>
        {icon}
        <ButtonText>{text}</ButtonText>
      </Container>
    </StyledTouchable>
  );
}

const StyledTouchable = styled(TouchableHighlight)<{width: string}>`
  background-color: #43636933;
  padding: 20px 16px;
  border-radius: 10px;
  width: ${({width}) => width};
  /* align-items: center; */
  /* justify-content: center; */
`;

const Container = styled.View`
  flex-direction: row;
  /* align-items: f; */
  align-items: center;
  /* justify-content: center; */
  gap: 12px;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.text};
  font-family: 'Gothic-Bold';
  font-size: 12px;
`;
