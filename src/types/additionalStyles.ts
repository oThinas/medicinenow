/** Core */
import { StyleProp } from 'react-native';

export type PropsWithAdditionalStyles<C, T = unknown> = T & { additionalStyles?: StyleProp<C> };
