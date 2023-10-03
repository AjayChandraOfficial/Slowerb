import {Animated, StatusBar, Text, View} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

import Button from '../components/Button';
import {useEffect, useRef} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

export default function Welcome({navigation}: Props) {
  const theme = useTheme();
  return (
    <Container>
      {/* <Particles /> */}

      <BottomModal>
        <ModalText>
          Experience the magic of <PrimaryText>slow</PrimaryText> and{' '}
          <PrimaryText>reverb</PrimaryText> effects that will take your audio to
          the next level
        </ModalText>

        <Button
          text={'Get Started'}
          width="100%"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </BottomModal>

      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.backgroundLight}
      />
    </Container>
  );
}

function Particles() {
  const particle1 = useRef(new Animated.Value(0)).current;
  const particle2 = useRef(new Animated.Value(0)).current;
  const particle3 = useRef(new Animated.Value(0)).current;
  const particle4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateProgress();
  }, []);

  const animateProgress = () => {
    Animated.loop(
      Animated.timing(particle1, {
        toValue: 1,
        duration: 2000, // 4 seconds
        useNativeDriver: false, // You can set this to true if supported
      }),
    ).start();

    Animated.loop(
      Animated.timing(particle2, {
        toValue: 1,
        duration: 2000, // 4 seconds
        useNativeDriver: false, // You can set this to true if supported
      }),
    ).start();

    Animated.loop(
      Animated.timing(particle3, {
        toValue: 1,
        duration: 2000, // 4 seconds
        useNativeDriver: false, // You can set this to true if supported
      }),
    ).start();

    Animated.loop(
      Animated.timing(particle4, {
        toValue: 1,
        duration: 2000, // 4 seconds
        useNativeDriver: false, // You can set this to true if supported
      }),
    ).start();
  };

  const positionInterpolation = particle1.interpolate({
    inputRange: [0, 1],
    // outputRange: [500, -200],
    // use math random istead to generate a value between 500-700
    outputRange: [Math.random() * 500, -200],
  });

  const sizeInterpolation = particle1.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  const positionInterpolation2 = particle2.interpolate({
    inputRange: [0, 1],
    outputRange: [300, -200],
  });

  const positionInterpolation3 = particle3.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 600],
  });

  const positionInterpolation4 = particle4.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -200],
  });

  return (
    <View>
      <Particle
        size={150}
        radius={200}
        style={[
          {
            top: positionInterpolation,
            left: 20,
          },
        ]}></Particle>
      <Particle
        size={100}
        radius={200}
        style={[{top: positionInterpolation2, left: 275}]}></Particle>
      <Particle
        size={109}
        radius={200}
        style={[{top: positionInterpolation3, left: 100}]}></Particle>

      <Particle
        size={70}
        radius={200}
        style={[{top: positionInterpolation4, left: 300}]}></Particle>
    </View>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.backgroundLight};
`;

const ModalText = styled.Text`
  font-family: 'Gothic-Bold';
  font-size: 24px;
  color: ${({theme}) => theme.text};
  text-align: center;
`;

const PrimaryText = styled.Text`
  color: ${({theme}) => theme.backgroundLight};
`;

const BottomModal = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: ${({theme}) => theme.background};
  padding-top: 46px;
  padding-bottom: 46px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
`;

const Particle = styled(Animated.View)<{
  size: number;
  radius: number;
  // position: {
  //   top: number;
  //   left: number;
  // };
}>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: ${({radius}) => radius}px;
  background-color: #06a0b5;
  position: absolute;

  opacity: 0.25;
`;
