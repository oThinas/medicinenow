/** Core */
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../core';

export function Login(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Text style={[styles.text, styles.regular]}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'Poppins Bold',
    fontSize: 36,
  },
  regular: { fontFamily: 'Poppins Regular', fontWeight: 'bold' },
});
