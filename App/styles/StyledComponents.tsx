import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface Props {
  children: React.ReactNode;
}

export const SafeArea = ({children}: Props) => {
  const insets = useSafeAreaInsets();
  return <View style={{paddingTop: insets.top, flex: 1}}>{children}</View>;
};

export const Spacer = styled.View<{size: number}>`
  height: ${props => props.size}px;
`;
