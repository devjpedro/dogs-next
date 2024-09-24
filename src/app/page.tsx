import getPhotos from '@/actions/get-photos';
import Feed from '@/components/feed';
import React from 'react';

export default async function Home() {
  const { data } = await getPhotos();

  return (
    <section className="container mainContainer">
      {data?.length && <Feed photos={data} />}
    </section>
  );
}
