import { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { DespesasContext } from '../store/despesas-context'; // Importando o contexto

export default function GerenciarDespesa({ navigation }) {
  const despesasCtx = useContext(DespesasContext); // Ativando o contexto

  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  function confirmarHandler() {
    const valorDigitado = parseFloat(valor);

    // Validação simples para não salvar valores vazios ou zerados
    const valorEhValido = !isNaN(valorDigitado) && valorDigitado > 0;
    const descricaoEhValida = descricao.trim().length > 0;

    if (!valorEhValido || !descricaoEhValida) {
      Alert.alert('Dados inválidos!', 'Por favor, preencha a descrição e o valor corretamente.');
      return;
    }

    // Salvando no contexto de memória central
    despesasCtx.adicionarDespesa({
      descricao: descricao,
      valor: valorDigitado,
      data: new Date(), // Pega a data de hoje
    });

    navigation.goBack(); // Fecha a tela e volta
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Nova Despesa</Text>

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Ex: Almoço"
      />

      <Text style={styles.label}>Valor (R$)</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        keyboardType="decimal-pad"
        placeholder="0.00"
      />

      <View style={styles.botoesContainer}>
        <View style={styles.botao}>
          <Button title="Cancelar" color="#888" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.botao}>
          <Button title="Adicionar" color="#2b3990" onPress={confirmarHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f2f5fc',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#2b3990',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  botao: {
    minWidth: 120,
  },
});