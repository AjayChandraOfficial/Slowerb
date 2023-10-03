import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {RootNavigation} from './App/navigation/RootNavigation';
import {theme} from './App/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigation />
        <StatusBar />
      </NavigationContainer>
    </ThemeProvider>
  );
}
