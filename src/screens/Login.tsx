/** Core */
import { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { colors } from '../core';

/** Components */
import { ButtonComponent, TextComponent } from '../components';

/** Interfaces */
import { ILoginForm } from '../interfaces';

export function Login(): JSX.Element {
  const { control, handleSubmit } = useForm<ILoginForm>();
  const [isLoading, setIsLoading] = useState(false);

  const textInputRef = useRef<TextInput>(null);
  Keyboard.addListener('keyboardDidHide', () => textInputRef.current?.blur());

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    textInputRef.current?.blur();

    // aqui será feita a requisição para a API
    const response = await new Promise<{ error: boolean, message: string }>((resolve) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.1) {
          resolve({ error: false, message: 'Login efetuado' });
        } else {
          resolve({ error: true, message: 'Usuário ou senha inválidos' });
        }
      }, 3000);
    }).finally(() => setIsLoading(false));

    Toast.show({
      type: response.error ? 'error' : 'success',
      text1: response.error ? 'Erro' : 'Sucesso',
      text2: response.message,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 56,
    });

    console.log(data);
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextComponent>
          Usuário
          </TextComponent>

          <Controller
            control={control}
            name='username'
            render={({ field: { onChange, value } }) => (
              <TextInput
                ref={textInputRef}
                onChangeText={(value) => onChange(value)}
                value={value}
                style={styles.field}
                autoComplete='username'
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
          <TextComponent additionalStyles={[styles.underline, styles.small]}>
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
