'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';

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

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
