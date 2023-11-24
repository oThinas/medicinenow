/** Core */
import { StyleSheet, View } from 'react-native';

/** Components */
import { TextComponent } from '../components';

/** Hooks */
import { useAppSelector } from '../hook';
import { NavigationProps } from '../core';

export function Checkout({ route }: NavigationProps<'Checkout'>): JSX.Element {
  const cart = useAppSelector((state) => state.cart);
  const checkout = route.params;

  return (
    <View style={styles.container}>
      <TextComponent weight='bold' additionalStyles={styles.headerText}>
        Parabéns, você finalizou o resgate!
      </TextComponent>

      <View style={styles.summary}>
        <TextComponent>
          Seus itens:
        </TextComponent>

        {cart.map(({ id, dosage, manufacturer, name, quantity }) => (
          <TextComponent key={id}>
            {quantity}x {' '}
            <TextComponent weight='bold'>
              {name} {' '}
            </TextComponent>
            - {manufacturer} - {dosage}
          </TextComponent>
        ))}
      </View>

      <View style={styles.info}>
        <TextComponent weight='bold'>
          {checkout.address}
        </TextComponent>

        <TextComponent>
            Para resgatar, apresente o código abaixo no cofre:
        </TextComponent>

        <TextComponent weight='bold'>
          {checkout.code}
        </TextComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 52,
  },
  headerText: { textAlign: 'center' },
  summary: {
    marginTop: 16,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
