import {Slider} from '@miblanchard/react-native-slider';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {PauseIcon, PlayIcon} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';
import styled from 'styled-components/native';

const getFormattedDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${formattedSeconds}`;
};

interface MusicPlayerProps {
  audioBlob?: string;
  image?: string;
  titleText?: string;
  authorText?: string;
}

export default function MusicPlayer({
  audioBlob = 'hw.mp3',
  image,
  titleText,
  authorText,
}: MusicPlayerProps) {
  const [audio, setAudio] = useState<Sound>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliderTime, setSliderTime] = useState<number>();

  useEffect(() => {
    const sound = new Sound(audioBlob, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

      setAudio(sound);
    });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (audio && audio.isLoaded() && isPlaying) {
          audio.getCurrentTime((seconds: number) => {
            // if current time equal to duration, stop playing
            if (seconds >= audio.getDuration()) {
              setIsPlaying(false);
              audio.stop();
              setCurrentTime(0);
              return;
            }
            setCurrentTime(seconds);
          });
        }
      }, 100);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  if (!audio?.isLoaded()) {
    return null;
  }

  const togglePlay = () => {
    if (isPlaying) {
      audio?.pause();
      setIsPlaying(false);
    } else {
      audio?.play();
      setIsPlaying(true);
    }
  };

  const onSlidingComplete = (value: number[]) => {
    if (audio) {
      audio.setCurrentTime(value[0]);
      setCurrentTime(value[0]);
      setSliderTime(undefined);
    }
  };

  const onSlidingChange = (value: number[]) => {
    setSliderTime(value[0]);
  };

  return (
    <View>
      {image && (
        <Image
          // height={330}
          // width={100}
          height={330}
          style={{
            width: '100%',
          }}
          source={{
            uri: image,
          }}
        />
      )}
      {titleText && <TitleText>{titleText}</TitleText>}
      {authorText && <AuthorText>{authorText}</AuthorText>}

      <Spacer />

      <Player
        duration={audio?.getDuration() || 0}
        currentTime={sliderTime ?? currentTime}
        onSlidingComplete={onSlidingComplete}
        onSlidingStart={onSlidingChange}
      />

      <Controls togglePlay={togglePlay} isPlaying={isPlaying} />
    </View>
  );
}

interface PlayerProps {
  duration: number;
  currentTime: number;
  onSlidingComplete: (value: number[]) => void;
  onSlidingStart: (value: number[]) => void;
}

function Player({
  duration,
  currentTime,
  onSlidingComplete,
  onSlidingStart,
}: PlayerProps) {
  return (
    <View>
      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#7CEEFF"
        maximumTrackTintColor="#8A9A9D"
        thumbTintColor="#7CEEFF"
        trackStyle={{height: 5, borderRadius: 0}}
        thumbStyle={{width: 12, height: 12}}
        containerStyle={{
          paddingBottom: 0,
          marginBottom: 0,
          height: 18,
        }}
        onSlidingComplete={onSlidingComplete}
        onValueChange={onSlidingStart}
      />
      <Time maxDuration={duration} currentTime={currentTime} />
    </View>
  );
}

interface TimeProps {
  currentTime: number;
  maxDuration: number;
}

function Time({maxDuration, currentTime}: TimeProps) {
  const formattedMaxDuration = getFormattedDuration(maxDuration);
  const formattedCurrentTime = getFormattedDuration(currentTime);

  return (
    <TimeContanier>
      <TimeText>{formattedCurrentTime}</TimeText>
      <TimeText>{formattedMaxDuration}</TimeText>
    </TimeContanier>
  );
}

interface ControlsProps {
  togglePlay: () => void;
  isPlaying: boolean;
}

function Controls({togglePlay, isPlaying}: ControlsProps) {
  return (
    <ControlsContainer>
      <Pressable onPress={togglePlay}>
        <PlayPauseContainer colors={['#A6F3FF', '#00C2CB']}>
          {!isPlaying && <PlayIcon width={28} height={28} stroke={'#fff'} />}
          {isPlaying && <PauseIcon width={28} height={28} stroke={'#fff'} />}
        </PlayPauseContainer>
      </Pressable>
    </ControlsContainer>
  );
}

const TimeText = styled.Text`
  color: #8a9a9d;
  font-family: 'Gothic-Bold';
  font-size: 12px;
`;

const TimeContanier = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleText = styled.Text`
  color: #fff;
  font-family: 'Gothic-Bold';
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 4px;
`;
const AuthorText = styled.Text`
  color: #8a9a9d;
  font-family: 'Gothic-Bold';
  font-size: 16px;
`;

const ControlsContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
`;

const PlayPauseContainer = styled(LinearGradient)`
  width: 56px;
  height: 56px;
  border-radius: 28px;

  justify-content: center;
  align-items: center;
  /* elevation: 15; */
  /* shadow-color: #00c2cb; */
`;

const Spacer = styled.View`
  height: 20px;
`;
