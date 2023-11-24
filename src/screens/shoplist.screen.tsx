/** Core */
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { HourglassLow } from 'phosphor-react-native';
import Toast from 'react-native-toast-message';
import { colors } from '../core';

/** Components */
import { Medicine, TextComponent } from '../components';

/** Interfaces */
import { IMedicine } from '../interfaces';
import { medicineAPI } from '../api';

export function ShopList(): JSX.Element {
  const [medicineList, setMedicineList] = useState<IMedicine[]>([]);

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 52,
    paddingHorizontal: 16,
    gap: 8,
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
