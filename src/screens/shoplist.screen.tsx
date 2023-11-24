/** Core */
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { HourglassLow } from 'phosphor-react-native';
import Toast from 'react-native-toast-message';
import { NavigationProps, colors } from '../core';

/** Components */
import { ButtonComponent, Medicine, TextComponent } from '../components';

/** Hooks */
import { useAppDispatch, useAppSelector } from '../hook';

/** Reducers */
import { clearCart } from '../reducers';

/** Utils */
import { handleNavigate } from '../utils';

/** API */
import { medicineAPI } from '../api';

/** Interfaces */
import { IMedicine } from '../interfaces';

export function ShopList({ navigation }: NavigationProps<'ShopList'>): JSX.Element {
  const [medicineList, setMedicineList] = useState<IMedicine[]>([]);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const medicineQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  async function getMedicineList(): Promise<void> {
    try {
      const response = await medicineAPI.getMedicineList();
      setMedicineList(response);
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
  }

  useEffect(() => {
    getMedicineList();
  }, []);

  function handleClearCart(): void {
    dispatch(clearCart());
  }

  return (
    <View style={styles.container}>
      {medicineList.length ? (
        <FlatList
          data={medicineList}
          renderItem={({ item }) => (
            <Medicine {...item}/>
          )}
        />
      ) : (
        <View style={styles.emptyList}>
          <HourglassLow size={96} weight="regular" color={colors.white}/>

          <TextComponent weight='bold'>
            Carregando...
          </TextComponent>
        </View>
      )}

      <View style={styles.buttons}>
        <TextComponent>
          Total de itens: {medicineQuantity}
        </TextComponent>

        <ButtonComponent onPress={() => handleNavigate('ShopList', navigation)}>
          Finalizar resgate
        </ButtonComponent>

        <ButtonComponent additionalStyles={styles.dangerButton} onPress={() => handleClearCart()}>
          Limpar carrinho
        </ButtonComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 52,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: { gap: 8 },
  dangerButton: { backgroundColor: colors.danger },
});
