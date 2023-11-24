/** Core */
import { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../core';

/** Components */
import { TextComponent } from '..';

/** Props */
import { IButtonProps } from './button.props';

/** Types */
import { PropsWithAdditionalStyles } from '../../types';

export function ButtonComponent({ variant = 'primary', ...props }: PropsWithChildren<PropsWithAdditionalStyles<ViewStyle, IButtonProps>>): JSX.Element {
  const buttonStyles = [styles.container, styles[variant], props.additionalStyles];
  if (props.disabled) buttonStyles.push(styles.disabled);

  return (
    <TouchableOpacity activeOpacity={0.75} style={buttonStyles} {...props}>
      <TextComponent additionalStyles={props.disabled ? styles.textDisabled : {}}>
        {props.children}
      </TextComponent>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.primary },
  secondary: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  icon: {},
  disabled: {
    backgroundColor: colors.gray,
    borderColor: colors.gray,
  },
  textDisabled: { color: colors.black },
});
