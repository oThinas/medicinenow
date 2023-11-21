/** Core */
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';

/** Screens */
import { Login } from '../screens';

export type MainNavigatorParamList = {
  Login: undefined;
  Register: undefined;
}

export type NavigationProps<T extends keyof MainNavigatorParamList> = StackScreenProps<MainNavigatorParamList, T>;

export function MainNavigator(): JSX.Element {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Screen name='Login' component={Login} />
    </Navigator>
  );
}
