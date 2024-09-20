import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a Senha | Dogs',
  description: 'Recupere a sua senha no site Dogs.',
};

export default async function PerdeuPage() {
  return (
    <main>
      <h1>Perdeu</h1>
    </main>
  );
}
