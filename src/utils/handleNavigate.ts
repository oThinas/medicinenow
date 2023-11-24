/** Core */
import { MainNavigatorParamList, NavigationProps } from '../core';

export function handleNavigate(
  screen: keyof MainNavigatorParamList,
  navigation: NavigationProps<keyof MainNavigatorParamList>['navigation'],
): void {
  navigation.navigate(screen);
}
