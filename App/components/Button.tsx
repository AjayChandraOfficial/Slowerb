import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {noop} from '../utils/functions';

interface ButtonProps {
  text: string;
  width?: string;
  onPress?: () => void;
  type?: 'primary' | 'primary-small' | 'secondary-small';
}

export default function Button(props: ButtonProps) {
  const {text, width = '100%', onPress = noop, type = 'primary'} = props;

  return (
    <View>
      {type === 'primary' && (
        <PrimaryButton onPress={onPress} width={width} activeOpacity={0.85}>
          <PrimaryButtonText>{text}</PrimaryButtonText>
        </PrimaryButton>
      )}

      {type === 'primary-small' && (
        <PrimarySmallButton
          onPress={onPress}
          width={width}
          activeOpacity={0.85}>
          <PrimarySmallButtonText>{text}</PrimarySmallButtonText>
        </PrimarySmallButton>
      )}

      {type === 'secondary-small' && (
        <SecondarySmallButton
          onPress={onPress}
          width={width}
          activeOpacity={0.85}>
          <PrimarySmallButtonText>{text}</PrimarySmallButtonText>
        </SecondarySmallButton>
      )}
    </View>
  );
}

const StyledTouchable = styled(TouchableOpacity)<{width: string}>`
  background-color: ${({theme}) => theme.primaryDark};
  padding: 18px 0px;
  border-radius: 50px;
  elevation: 15;
  width: ${({width}) => width};
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${({theme}) => theme.text};
  font-family: 'Gothic-Bold';
  font-size: 16px;
`;

const PrimaryButton = styled(StyledTouchable)`
  padding: 18px 0px;
  shadow-color: #39c0d4;
`;

const PrimaryButtonText = styled(ButtonText)`
  font-size: 16px;
`;

const PrimarySmallButton = styled(StyledTouchable)`
  padding: 12px 0px;
  shadow-color: #39c0d4;
`;

const PrimarySmallButtonText = styled(ButtonText)`
  font-size: 14px;
`;

const SecondarySmallButton = styled(StyledTouchable)`
  padding: 12px 0px;
  background-color: ${({theme}) => theme.secondary};
  shadow-color: #8a9a9d;
`;
