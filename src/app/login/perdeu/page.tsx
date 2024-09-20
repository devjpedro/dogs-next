import LoginPerdeuForm from '@/components/login/login-perdeu-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a Senha | Dogs',
  description: 'Recupere a sua senha no site Dogs.',
};

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
}
