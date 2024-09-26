'use client';

import React from 'react';
// import PhotoComments from './PhotoComments';
import PhotoDelete from './photo-delete';
import Link from 'next/link';
import { useUser } from '@/context/user-context';
import Image from 'next/image';
import type { PhotoData } from '@/actions/get-photo';
import {
  AttributesList,
  Author,
  DetailsContainer,
  ImageContainer,
  PhotoContainer,
  Visualizacoes,
} from './styled';

const PhotoContent = ({
  data,
  single,
}: {
  data: PhotoData;
  single: boolean;
}) => {
  const { user } = useUser();
  const { photo } = data;

  return (
    <PhotoContainer className={single ? 'single' : ''}>
      <ImageContainer className={single ? 'single' : ''}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </ImageContainer>
      <DetailsContainer className={single ? 'single' : ''}>
        <div>
          <Author>
            {user && user.username === photo.author ? (
              <PhotoDelete id={photo.id.toString()} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <Visualizacoes>{photo.acessos}</Visualizacoes>
          </Author>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <AttributesList>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </AttributesList>
        </div>
      </DetailsContainer>
      {/* <PhotoComments single={single} id={photo.id} comments={comments} /> */}
    </PhotoContainer>
  );
};

export default PhotoContent;
