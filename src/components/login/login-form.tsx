'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import Link from 'next/link';
import { CadastroContainer, CustomLink, FormContainer } from './styled';

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
      <FormContainer action={action}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </FormContainer>
      <CustomLink href="/login/perdeu">Perdeu a senha?</CustomLink>
      <CadastroContainer>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href="/login/criar" className="button">
          Cadastro
        </Link>
      </CadastroContainer>
    </>
  );
}
