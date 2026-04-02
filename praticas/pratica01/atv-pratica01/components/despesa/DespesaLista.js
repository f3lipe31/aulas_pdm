import { FlatList } from 'react-native';
import DespesaItem from './DespesaItem'; // Importa o item unitário

function DespesaLista({ despesas }) {
  return (
    <FlatList
      data={despesas}
      keyExtractor={(item) => item.id} // Identificador único do item
      renderItem={({ item }) => (
        <DespesaItem 
          descricao={item.descricao} 
          valor={item.valor} 
          data={item.data} 
        />
      )}
    />
  );
}

export default DespesaLista;