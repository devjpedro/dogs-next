'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import { FormContainer } from './styled';
import React from 'react';
import resetPassword from '@/actions/resetPassword';

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Resetando...</Button>
  ) : (
    <Button disabled={pending}>Resetar Senha</Button>
  );
}

interface LoginResetarFormProps {
  keyToken: string;
  login: string;
}

export default function LoginResetarForm({
  keyToken,
  login,
}: LoginResetarFormProps) {
  const [state, action] = useFormState(resetPassword, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <FormContainer action={action}>
        <Input label="Nova Senha" type="password" name="password" />
        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={keyToken} />

        <ErrorMessage error={state.error} />
        <FormButton />
      </FormContainer>
    </>
  );
}
