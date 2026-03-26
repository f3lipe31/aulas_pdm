import { View, Text, StyleSheet, Pressable } from 'react-native';

// Função utilitária para converter as datas do JavaScript para DD/MM/AAAA
function getDataFormatada(data) {
  return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}

function DespesaItem({ descricao, valor, data }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.descricaoText}>{descricao}</Text>
          <Text style={styles.dataText}>{getDataFormatada(data)}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valorText}>R$ {valor.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default DespesaItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  itemContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 3, // Sombras no Android
    shadowColor: '#000', // Sombras no iOS
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  descricaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dataText: {
    fontSize: 14,
    color: '#666',
  },
  valorContainer: {
    backgroundColor: '#e4e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 80,
  },
  valorText: {
    fontWeight: 'bold',
    color: '#2b3990',
  },
});