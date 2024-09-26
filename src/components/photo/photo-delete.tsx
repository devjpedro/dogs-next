'use client';

import React from 'react';
import { DeleteButton } from './styled';
import deletePhoto from '@/actions/delete-photo';

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = React.useState(false);

  async function handleClick() {
    setLoading(true);

    const confirm = window.confirm('Tem certeza que deseja deletar esta foto?');

    if (confirm) await deletePhoto(id);

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <DeleteButton disabled>Deletar</DeleteButton>
      ) : (
        <DeleteButton onClick={handleClick}>Deletar</DeleteButton>
      )}
    </>
  );
}
