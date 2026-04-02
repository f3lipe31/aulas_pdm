import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { rotulo_btn_cadastro_meta,rotulo_input_meta,rotulo_lista_metas } from './mensagens';


export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder={rotulo_input_meta}/>
      <Button title='rotulo_btn_cadastro_meta'/>
      <Text>(otulo_lista_metas)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
