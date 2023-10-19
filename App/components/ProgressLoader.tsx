import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import styled from 'styled-components/native';
import {noop} from '../utils/functions';

interface Props {
  onLoadingComplete?: () => void;
}

const ProgressBar = ({onLoadingComplete = noop}: Props) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateProgress();

    return () => {
      progress.resetAnimation();
    };
  }, []);

  const animateProgress = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 8000, // 4 seconds
      useNativeDriver: false, // You can set this to true if supported
    }).start(() => {
      onLoadingComplete();
    });
  };

  const widthInterpolation = progress.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['0%', '50%', '75%', '85%', '100%'],
  });

  return (
    <Container>
      <ProgressContainer>
        <ProgressBarLoader style={[{width: widthInterpolation}]} />
      </ProgressContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ProgressContainer = styled.View`
  height: 14px;
  width: 100%;
  background-color: ${({theme}) => theme.text};
  border-color: ${({theme}) => theme.text};
  border-radius: 15px;
  position: relative;
`;

const ProgressBarLoader = styled(Animated.View)`
  height: 14px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({theme}) => theme.primaryDark};
  border-radius: 15px;
`;

const LoadingText = styled.Text`
  color: ${({theme}) => theme.text};
  font-family: 'Gothic';
  font-size: 16px;
  margin-top: 20px;
`;

export default ProgressBar;
