'use server';

import { PHOTOS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';

export type PhotoType = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

type GetPhotosParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

export default async function getPhotos({
  page = 1,
  total = 6,
  user = 0,
}: GetPhotosParams = {}) {
  try {
    const { url } = PHOTOS_GET({
      page,
      total,
      user,
    });

    const response = await fetch(url, {
      next: {
        revalidate: 10,
        tags: ['photos'],
      },
    });

    if (!response.ok) throw new Error('Erro ao recuperar as fotos.');

    const data = (await response.json()) as PhotoType[];

    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
