import React, {useCallback, useState} from 'react';
import {FlatList, PermissionsAndroid, StatusBar, View} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ArrowUpOnSquareIcon,
  BeakerIcon,
  BellIcon,
  Cog6ToothIcon,
  MicrophoneIcon,
} from 'react-native-heroicons/outline';
import {useTheme} from 'styled-components';
import IconTextContainerButton from '../components/IconTextContainerButton';
import PosterWithText from '../components/PosterWithText';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParams';
import ReactNativeBlobUtil from 'react-native-blob-util';
import MusicPlayer from '../components/MusicPlayer';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: Props) {
  const insets = useSafeAreaInsets();

  const navigateToUploadPreview = (audio: string) => {
    navigation.navigate('UploadPreview', {
      audio,
    });
  };

  return (
    <Container
      style={{paddingTop: insets.top}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 100,
      }}>
      <Gradient />

      <Header />

      <UploadAudio navigateToUploadPreview={navigateToUploadPreview} />

      <RecentlyConverted />

      <PopularSlowerbs />

      <StatusBar barStyle="light-content" backgroundColor="#102B2D" />
    </Container>
  );
}

function Gradient() {
  return (
    <LinearGradient
      colors={['#102B2D', 'transparent']}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 130,
      }}
    />
  );
}

function Header() {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <HeaderText>Slowerb</HeaderText>

      <IconsContainer>
        <BellIcon
          width={26}
          height={26}
          stroke={theme.text}
          strokeWidth={1.5}
        />
        <Cog6ToothIcon
          width={26}
          height={26}
          stroke={theme.text}
          strokeWidth={1.5}
        />
      </IconsContainer>
    </HeaderContainer>
  );
}

interface UploadAudioProps {
  navigateToUploadPreview: (audio: string) => void;
}

function UploadAudio({navigateToUploadPreview}: UploadAudioProps) {
  //   const [fileResponse, setFileResponse] = useState<DocumentPickerResponse>();

  const [audioBlob, setAudioBlob] = useState<any>();

  const handleDocumentSelection = useCallback(async () => {
    console.log('INSIDE HANDLE DOUCMENT SELECTION');
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    try {
      const response = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.audio],
      });
      //       setFileResponse(response);
      //       console.log(response);
      //       navigateToUploadPreview(response);
      // use react native blob util to convert file uri to blob
      //       const audioBlob = await ReactNativeBlobUtil.fs.readFile(
      //         response.uri,
      //         'base64',
      //       );

      const audioPath = await ReactNativeBlobUtil.fs.stat(response.uri);
      // console.log(audioPath);
      // setAudioBlob(audioPath.path);
      navigateToUploadPreview(audioPath.path);
    } catch (err) {
      console.warn(err);
    }
  }, []);
  const uploadAnAudioData = [
    {
      text: 'Upload',
      icon: <ArrowUpOnSquareIcon width={24} height={24} stroke={'#fff'} />,
      onPress: handleDocumentSelection,
    },
    {
      text: 'Record',
      icon: <MicrophoneIcon width={24} height={24} stroke={'#fff'} />,
      onPress: handleDocumentSelection,
    },
    {
      text: 'Youtube Link',
      icon: <ArrowUpOnSquareIcon width={24} height={24} stroke={'#fff'} />,
      onPress: handleDocumentSelection,
    },
    {
      text: 'Sample Audio',
      icon: <BeakerIcon width={24} height={24} stroke={'#fff'} />,
      onPress: handleDocumentSelection,
    },
  ];
  return (
    <View style={{marginTop: 24}}>
      <ItemHeaderText>Upload an audio</ItemHeaderText>
      <FlatList
        data={uploadAnAudioData}
        renderItem={({item}) => (
          <IconTextContainerButton
            text={item.text}
            icon={item.icon}
            width="48%"
            onPress={item.onPress}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          marginTop: 12,
          paddingHorizontal: 24,
          gap: 24,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        numColumns={2}
      />

      {audioBlob && <MusicPlayer audioBlob={audioBlob} />}
    </View>
  );
}

const dummyPopularSlowerbs = [
  {
    text: 'Dont Let me down',
    image: 'https://picsum.photos/600/800',
  },
  {
    text: 'You and I',
    image: 'https://picsum.photos/700/850',
  },
  {
    text: 'Remix',
    image: 'https://picsum.photos/780/700',
  },
];

function PopularSlowerbs() {
  return (
    <View style={{marginTop: 32}}>
      <ItemHeaderText>Popular Slowerbs</ItemHeaderText>

      {/* // create horizontal scroll view */}

      <FlatList
        data={dummyPopularSlowerbs}
        renderItem={({item}) => (
          <PosterWithText text={item.text} image={item.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          marginTop: 12,
          paddingHorizontal: 24,
          gap: 24,
        }}
        horizontal
      />
    </View>
  );
}

const dummyRecentlyConverted = [
  {
    text: 'Rainy Day',
    image: 'https://picsum.photos/800/800',
  },
  {
    text: 'Sunday',
    image: 'https://picsum.photos/700/800',
  },
  {
    text: 'Korean',
    image: 'https://picsum.photos/800/700',
  },
];

function RecentlyConverted() {
  return (
    <View style={{marginTop: 32}}>
      <ItemHeaderText>Recently Converted</ItemHeaderText>

      {/* // create horizontal scroll view */}

      <FlatList
        data={dummyRecentlyConverted}
        renderItem={({item}) => (
          <PosterWithText text={item.text} image={item.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          marginTop: 12,
          paddingHorizontal: 24,
          gap: 24,
        }}
        horizontal
      />
    </View>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
  padding-horizontal: 24px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const HeaderText = styled.Text`
  font-family: 'Gothic-Bold';
  font-size: 18px;
  color: ${({theme}) => theme.text};
`;

const ItemHeaderText = styled.Text`
  font-family: 'Gothic-Bold';
  font-size: 20px;
  color: ${({theme}) => theme.text};
  padding-horizontal: 24px;
`;
