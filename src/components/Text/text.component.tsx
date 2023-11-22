/** Core */
import { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { colors, fonts } from '../../core';

/** Props */
import { ITextProps } from './text.props';

/** Types */
import { PropsWithAdditionalStyles } from '../../types';

export function TextComponent({ weight =  'regular', ...props }: PropsWithChildren<PropsWithAdditionalStyles<TextStyle, ITextProps>>): JSX.Element {
  return (
    <Text style={[styles.base, styles[weight], props.additionalStyles]} {...props}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    fontSize: 24,
    color: colors.white,
    lineHeight: 32,
  },
  regular: { fontFamily: fonts.regular },
  bold: { fontFamily: fonts.bold },
});
