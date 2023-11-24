/** Core */
import { View, StyleSheet } from 'react-native';
import { MinusCircle, Pill, PlusCircle } from 'phosphor-react-native';
import { colors } from '../../core';

/** Components */
import { ButtonComponent, TextComponent } from '..';

/** Hooks */
import { useAppDispatch, useAppSelector } from '../../hook';

/** Props */
import { IMedicineProps } from './medicine.props';
import { addMedicine, removeMedicine } from '../../reducers';

export function Medicine(props: IMedicineProps): JSX.Element {
  const cart = useAppSelector((state) => state.cart);
  const quantity = cart.find((item) => item.id === props.id)?.quantity || 0;

  const dispatch = useAppDispatch();

  function handleAddToCart(): void {
    dispatch(addMedicine(props));
  }

  function handleRemoveFromCart(): void {
    dispatch(removeMedicine(props));
  }

  return (
    <View style={styles.container}>
      <Pill color={colors.white} size={52} weight='thin'/>

      <View>
        <TextComponent weight='bold'>
          {props.name}
        </TextComponent>

        <TextComponent additionalStyles={styles.mediumText}>
          {props.manufacturer}
        </TextComponent>

        <TextComponent additionalStyles={styles.smallText}>
          Dosagem: {props.dosage}
        </TextComponent>
      </View>

      <View style={styles.actions}>
        <ButtonComponent variant='icon' onPress={() => handleAddToCart()}>
          <PlusCircle size={28} color={colors.white}/>
        </ButtonComponent>

        <TextComponent>
          {quantity}
        </TextComponent>

        <ButtonComponent variant='icon' onPress={() => handleRemoveFromCart()}>
          <MinusCircle size={28} color={colors.white}/>
        </ButtonComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  mediumText: { fontSize: 18 },
  smallText: { fontSize: 16 },
  actions: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 'auto',
  },
});
