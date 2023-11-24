/** Core */
import 'react-native-gesture-handler';
import Toast, { SuccessToast, ErrorToast } from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { MainNavigator, colors } from './src/core';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          colors: {
            background: colors.background,
            primary: colors.primary,
            text: colors.white,
            card: '',
            border: '',
            notification: '',
          },
          dark: true,
        }}
      >
        <MainNavigator />

        <StatusBar barStyle='light-content' translucent backgroundColor={colors.background}/>
      </NavigationContainer>

      <Toast config={{
        success(props) {
          return <SuccessToast {...props} text1Style={{ fontSize: 20 }} text2Style={{ fontSize: 16 }} />;
        },
        error(props) {
          return <ErrorToast {...props} text1Style={{ fontSize: 20 }} text2Style={{ fontSize: 16 }} />;
        },
      }} />
    </SafeAreaProvider>
  );
}
