'use server';

import { PHOTO_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import type { PhotoType } from './get-photos';

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: PhotoType;
  comments: Comment[];
};

export default async function getPhoto(id: string) {
  try {
    const { url } = PHOTO_GET(id);

    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ['photos', 'comment'],
      },
    });

    if (!response.ok) throw new Error('Erro ao recuperar a foto.');

    const data = (await response.json()) as PhotoData;

    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
