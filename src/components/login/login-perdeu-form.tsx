'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import { FormContainer } from './styled';
import recoverPassword from '@/actions/recoverPassword';
import React from 'react';

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Enviando...</Button>
  ) : (
    <Button disabled={pending}>Enviar E-mail</Button>
  );
}

export default function LoginPerdeuForm() {
  const [url, setUrl] = React.useState('');

  const [state, action] = useFormState(recoverPassword, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <>
      <FormContainer action={action}>
        <Input label="E-mail / Usuário" type="text" name="login" />
        <input type="hidden" name="url" value={url} />
        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: '#4c1' }}>E-mail enviado com sucesso.</p>
        ) : (
          <FormButton />
        )}
      </FormContainer>
    </>
  );
}
