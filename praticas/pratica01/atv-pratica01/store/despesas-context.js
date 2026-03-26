import { createContext, useState } from 'react';

// Dados iniciais de teste (DUMMY_DATA)
const DUMMY_DESPESAS = [
  { id: 'd1', descricao: 'Almoço Restaurante', valor: 59.90, data: new Date('2026-03-20') },
  { id: 'd2', descricao: 'Uber Trabalho', valor: 25.40, data: new Date('2026-03-21') },
  { id: 'd3', descricao: 'Camiseta Nova', valor: 89.90, data: new Date('2026-03-22') },
];

export const DespesasContext = createContext({
  despesas: [],
  adicionarDespesa: ({ descricao, valor, data }) => {},
  deletarDespesa: (id) => {},
});

function DespesasContextProvider({ children }) {
  const [listaDespesas, setListaDespesas] = useState(DUMMY_DESPESAS);

  function adicionarDespesa(dadosDespesa) {
    setListaDespesas((listaAtual) => {
      const novaDespesa = {
        id: Math.random().toString(), // Gera um ID temporário
        ...dadosDespesa,
      };
      return [novaDespesa, ...listaAtual];
    });
  }

  function deletarDespesa(id) {
    setListaDespesas((listaAtual) => {
      return listaAtual.filter((despesa) => despesa.id !== id);
    });
  }

  const value = {
    despesas: listaDespesas,
    adicionarDespesa: adicionarDespesa,
    deletarDespesa: deletarDespesa,
  };

  return (
    <DespesasContext.Provider value={value}>
      {children}
    </DespesasContext.Provider>
  );
}

export default DespesasContextProvider;