import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components';

import Components from '../screens/Components';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {RootStackParamList} from './RootStackParams';
import UploadPreview from '../screens/UploadPreview';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {TouchableHighlight} from 'react-native-gesture-handler';
import YoutubePreview from '../screens/YoutubePreview';
import Converting from '../screens/Converting';

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigation() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Converting"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
        headerTintColor: theme.text,
        headerTitleStyle: {
          fontFamily: 'Gothic-Bold',
          fontSize: 20,
        },
        // headerLeft: () => (
        //   <ArrowLeftIcon
        //     width={26}
        //     height={26}
        //     stroke="#fff"
        //     strokeWidth={1.5}
        //   />
        // ),
        // headerLeftContainerStyle: {
        //   paddingLeft: 20,
        // },
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          // header shown false
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // header shown false
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UploadPreview"
        component={UploadPreview}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="YoutubePreview"
        component={YoutubePreview}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Converting"
        component={Converting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Components" component={Components} />
    </Stack.Navigator>
  );
}
