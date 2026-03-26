import { View, Text, StyleSheet } from 'react-native';

function DespesaSumario({ despesas, periodo }) {
  // O reduce passa por cada despesa e acumula a soma dos valores
  const somaDespesas = despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodoText}>{periodo}</Text>
      <Text style={styles.valorText}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

export default DespesaSumario;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e4e8f0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  periodoText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  valorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2b3990',
  },
});