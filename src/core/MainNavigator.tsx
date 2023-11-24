/** Core */
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';

/** Screens */
import { Checkout, Login, Register, ShopList } from '../screens';
import { ICheckout } from '../interfaces';

export type MainNavigatorParamList = {
  Login: undefined;
  Register: undefined;
  ShopList: undefined;
  Checkout: ICheckout;
}

export type NavigationProps<T extends keyof MainNavigatorParamList> = StackScreenProps<MainNavigatorParamList, T>;

export function MainNavigator(): JSX.Element {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Screen name='Login' component={Login} />
      <Screen name='Register' component={Register} />
      <Screen name='ShopList' component={ShopList} />
      <Screen name='Checkout' component={Checkout} />
    </Navigator>
  );
}
