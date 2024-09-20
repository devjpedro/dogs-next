'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import login from './login';

export default async function register(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;
  const email = formData.get('email') as string | null;

  try {
    if (!email || !username || !password)
      throw new Error('Preencha todos os dados.');

    if (password.length < 6)
      throw new Error('A senha deve conter mais de 6 caracteres.');

    const { url } = USER_POST();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('E-mail ou usuário já cadastrado.');

    const { ok } = await login(
      {
        ok: true,
        error: '',
      },
      formData,
    );

    if (!ok) throw new Error('Erro ao logar');

    return {
      data: null,
      ok: true,
      error: '',
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
