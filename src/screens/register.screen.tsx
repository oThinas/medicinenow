/** Core */
import { useState, useRef } from 'react';
import { View, StyleSheet, Keyboard, TextInput, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { NavigationProps, colors } from '../core';

/** Components */
import { ButtonComponent, TextComponent } from '../components';

/** Utils */
import { handleNavigate } from '../utils';

/** API */
import { userAPI } from '../api';

/** Hooks */
import { useAppDispatch } from '../hook';

/** Reducers */
import { setUser } from '../reducers';

/** Interfaces */
import { IRegisterForm } from '../interfaces';

export function Register({ navigation }: NavigationProps<'Register'>): JSX.Element {
  const { control, handleSubmit } = useForm<IRegisterForm>();
  const [isLoading, setIsLoading] = useState(false);

  const textInputRef = useRef<TextInput>(null);
  Keyboard.addListener('keyboardDidHide', () => textInputRef.current?.blur());

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    textInputRef.current?.blur();

    try {
      const user = await userAPI.register(data);
      dispatch(setUser(user));
      handleNavigate('ShopList', navigation);
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Tente novamente mais tarde.',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 56,
      });
    }

    console.log(data);
  });

  return (
    <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextComponent>
              Nome
            </TextComponent>

            <Controller
              control={control}
              name='name'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  ref={textInputRef}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.field}
                  autoComplete='name'
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <TextComponent>
              Sobrenome
            </TextComponent>

            <Controller
              control={control}
              name='surname'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  ref={textInputRef}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.field}
                  autoComplete='family-name'
                />
              )}
            />
          </View>

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
                  autoComplete='off'
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <TextComponent>
              Confimar senha
            </TextComponent>

            <Controller
              control={control}
              name='confirmPassword'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  ref={textInputRef}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.field}
                  autoComplete='off'
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <TextComponent>
              Celular
            </TextComponent>

            <Controller
              control={control}
              name='phone'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  ref={textInputRef}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.field}
                  keyboardType='numeric'
                  autoComplete='off'
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <TextComponent>
              CEP
            </TextComponent>

            <Controller
              control={control}
              name='zipCode'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  ref={textInputRef}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.field}
                  keyboardType='numeric'
                  autoComplete='off'
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <TextComponent>
              Idade
            </TextComponent>

            <Controller
              control={control}
              name='age'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  ref={textInputRef}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.field}
                  autoComplete='off'
                  keyboardType='numeric'
                />
              )}
            />
          </View>

          <View style={styles.input}>
            <TextComponent>
              Código SUS
            </TextComponent>

            <Controller
              control={control}
              name='susCode'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  ref={textInputRef}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={styles.field}
                  keyboardType='numeric'
                  autoComplete='off'
                />
              )}
            />
          </View>
        </View>

        <View style={styles.actions}>
          <ButtonComponent onPress={onSubmit} disabled={isLoading}>
            Registrar
          </ButtonComponent>

          <TextComponent additionalStyles={styles.small}>
            Já possui conta?{' '}

            <TextComponent
              additionalStyles={[styles.underline, styles.small]}
              onPress={() => handleNavigate('Login', navigation)}
            >
              Entre
            </TextComponent>
          </TextComponent>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    gap: 24,
    marginTop: 52,
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
