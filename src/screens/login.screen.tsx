/** Core */
import { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { NavigationProps, colors } from '../core';

/** Components */
import { ButtonComponent, TextComponent } from '../components';

/** Utils */
import { handleNavigate } from '../utils';

/** Hooks */
import { useAppDispatch } from '../hook';

/** Reducers */
import { setUser } from '../reducers';

/** Interfaces */
import { ILoginForm } from '../interfaces';
import { userAPI } from '../api/user.api';

export function Login({ navigation }: NavigationProps<'Login'>): JSX.Element {
  const { control, handleSubmit } = useForm<ILoginForm>();
  const [isLoading, setIsLoading] = useState(false);

  const textInputRef = useRef<TextInput>(null);
  Keyboard.addListener('keyboardDidHide', () => textInputRef.current?.blur());

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    textInputRef.current?.blur();

    // aqui será feita a requisição para a API
    try {
      const user = await userAPI.login(data.email, data.password);
      dispatch(setUser(user));
      handleNavigate('ShopList', navigation);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Tente novamente mais tarde',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 56,
      });
    }

    handleNavigate('ShopList', navigation);
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextComponent>
          Email
          </TextComponent>

          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <TextInput
                ref={textInputRef}
                onChangeText={(value) => onChange(value)}
                value={value}
                style={styles.field}
                autoComplete='email'
              />
            )}
          />
        </View>

        <View style={styles.input}>
          <TextComponent>
          Senha
          </TextComponent>

          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <TextInput
                ref={textInputRef}
                onChangeText={(value) => onChange(value)}
                value={value}
                style={styles.field}
                secureTextEntry
                autoComplete='off'
              />
            )}
          />
        </View>
      </View>

      <View style={styles.actions}>
        <ButtonComponent onPress={onSubmit} disabled={isLoading}>
          Entrar
        </ButtonComponent>

        <TextComponent additionalStyles={styles.small}>
          Não possui conta?{' '}
          <TextComponent
            additionalStyles={[styles.underline, styles.small]}
            onPress={() => handleNavigate('Register', navigation)}
          >
            Registre-se
          </TextComponent>
        </TextComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    gap: 24,
  },
  inputContainer: {
    justifyContent: 'center',
    width: '80%',
    gap: 20,
  },
  input: { gap: 4 },
  field: {
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 8,
    padding: 8,
    color: colors.white,
    fontSize: 20,
    width: '100%',
  },
  actions: { gap: 4 },
  small: { fontSize: 16 },
  underline: { textDecorationLine: 'underline' },
});
