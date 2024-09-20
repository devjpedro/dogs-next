import LoginPerdeuForm from '@/components/login/login-perdeu-form';
import LoginResetarForm from '@/components/login/login-resetar-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resetar a Senha | Dogs',
  description: 'Resete a sua senha do site Dogs.',
};

interface ResetarParamsPage {
  searchParams: {
    key: string;
    login: string;
  };
}

export default async function ResetarPage({ searchParams }: ResetarParamsPage) {
  console.log(searchParams);

  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
