'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Enviando...</Button>
  ) : (
    <Button disabled={pending}>Entrar</Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  console.log(state);

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <FormButton />
        {!state.ok && <p>{state.error}</p>}
      </form>
    </>
  );
}
