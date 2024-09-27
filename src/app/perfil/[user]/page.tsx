import getPhotos from '@/actions/get-photos';
import Feed from '@/components/feed';
import React from 'react';

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await getPhotos({ user: params.user });

  if (!data) return null;

  return (
    <section className="container mainSection">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
