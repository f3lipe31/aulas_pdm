import DespesaSaida from '../components/despesa/DespesaSaida';

// Dados fakes para testar a renderização dos itens
const DUMMY_DESPESAS = [
  { id: 'd1', descricao: 'Almoço Restaurante', valor: 59.90, data: new Date('2026-03-20') },
  { id: 'd2', descricao: 'Uber Trabalho', valor: 25.40, data: new Date('2026-03-21') },
  { id: 'd3', descricao: 'Camiseta Nova', valor: 89.90, data: new Date('2026-03-22') },
];

export default function TodasDespesas() {
  return (
    <DespesaSaida despesas={DUMMY_DESPESAS} periodo="Total Acumulado" />
  );
}