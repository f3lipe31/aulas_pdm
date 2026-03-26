import { useContext } from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';
import { DespesasContext } from '../store/despesas-context'; // Importando a memória

export default function TodasDespesas() {
  const despesasCtx = useContext(DespesasContext); // Lendo os dados

  return (
    <DespesaSaida despesas={despesasCtx.despesas} periodo="Total Acumulado" />
  );
}