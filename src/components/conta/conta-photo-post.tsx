'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import { InputFile, PhotoPostContainer, PreviewFile } from './styled';
import postPhoto from '@/actions/post-photo';

function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Enviando...</Button>
  ) : (
    <Button disabled={pending}>Enviar</Button>
  );
}

export default function ContaPhotoPost() {
  const [state, action] = useFormState(postPhoto, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = React.useState('');

  function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <>
      <PhotoPostContainer className="animeLeft">
        <form action={action}>
          <Input label="Nome" type="text" name="nome" />
          <Input label="Peso" type="number" name="peso" />
          <Input label="Idade" type="number" name="idade" />
          <InputFile
            onChange={handleImageChange}
            type="file"
            name="img"
            id="img"
          />
          <ErrorMessage error={state.error} />
          <FormButton />
        </form>
        <PreviewFile $bgImage={img}></PreviewFile>
      </PhotoPostContainer>
    </>
  );
}
