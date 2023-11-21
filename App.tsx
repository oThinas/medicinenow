/** Core */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { MainNavigator, colors } from './src/core';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />

        <StatusBar barStyle='light-content' translucent backgroundColor={colors.background}/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
