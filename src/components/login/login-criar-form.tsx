'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import { FormContainer } from './styled';
import register from '@/actions/register';

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Cadastrando...</Button>
  ) : (
    <Button disabled={pending}>Cadastrar</Button>
  );
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(register, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <FormContainer action={action}>
        <Input label="E-mail" type="email" name="email" />
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </FormContainer>
    </>
  );
}
