import {TextInput, View} from 'react-native';
import {PaperAirplaneIcon} from 'react-native-heroicons/outline';
import styled from 'styled-components/native';

export default function InputWithIcon() {
  return (
    <RelativeContainer>
      <Input placeholder="Paste a link" placeholderTextColor="#8A9A9D"></Input>

      <IconContainer
        style={{
          transform: [{translateY: 8}],
        }}>
        <PaperAirplaneIcon
          strokeWidth={1.5}
          width={24}
          height={24}
          stroke={'#ffffff'}
        />
      </IconContainer>
    </RelativeContainer>
  );
}

const RelativeContainer = styled.View`
  position: relative;
`;

const IconContainer = styled.View`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
`;

const Input = styled.TextInput`
  color: ${({theme}) => theme.text};
  font-family: 'Gothic-Bold';
  font-size: 14px;
  border: 1px solid ${({theme}) => theme.text};
  padding-horizontal: 20px;
  padding-vertical: 6px;
  border-radius: 50px;
`;
