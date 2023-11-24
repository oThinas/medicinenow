/** Core */
import { StyleSheet, View } from 'react-native';

/** Components */
import { TextComponent } from '../components';

export function ShopList(): JSX.Element {
  return (
    <View style={styles.container}>
      <TextComponent>
        ShopList
      </TextComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 52,
  },
});
