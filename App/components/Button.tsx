import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {noop} from '../utils/functions';

interface ButtonProps {
  text: string;
  width?: string;
  onPress?: () => void;
}

export default function Button(props: ButtonProps) {
  const {text, width = '100%', onPress = noop} = props;

  return (
    <View>
      <StyledTouchable onPress={onPress} width={width} activeOpacity={0.85}>
        <ButtonText>{text}</ButtonText>
      </StyledTouchable>
    </View>
  );
}

const StyledTouchable = styled(TouchableOpacity)<{width: string}>`
  background-color: ${({theme}) => theme.primaryDark};
  padding: 18px 0px;
  border-radius: 50px;
  elevation: 15;
  shadow-color: #39c0d4;
  width: ${({width}) => width};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.text};
  font-family: 'Gothic-Bold';
  font-size: 16px;
`;
