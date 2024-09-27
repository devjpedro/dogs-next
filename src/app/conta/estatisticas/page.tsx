import getStats from '@/actions/get-stats';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const UserStatsGraphs = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
};

export default async function EstatisticasPage() {
  const { data } = await getStats();

  if (!data) return null;

  return <UserStatsGraphs data={data} />;
}
