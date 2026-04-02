import { useContext } from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';
import { DespesasContext } from '../store/despesas-context';

export default function DespesasRecentes() {
  const despesasCtx = useContext(DespesasContext);

  // Filtra apenas despesas feitas nos últimos 7 dias
  const despesasRecentes = despesasCtx.despesas.filter((despesa) => {
    const hoje = new Date();
    const seteDiasAtras = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 7);
    return despesa.data >= seteDiasAtras && despesa.data <= hoje;
  });

  return (
    <DespesaSaida despesas={despesasRecentes} periodo="Últimos 7 dias" />
  );
}