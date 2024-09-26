'use server';

import { COMMENT_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Comment } from './get-photo';

export default async function postComment(state: {}, formData: FormData) {
  const token = cookies().get('token')?.value;
  const comment = formData.get('comment') as string | null;
  const id = formData.get('id') as string | null;

  try {
    if (!token || !comment || !id) throw new Error('Preencha todos os dados.');

    const { url } = COMMENT_POST(id);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok) throw new Error('Erro ao postar foto.');

    const data = (await response.json()) as Comment;

    revalidateTag('comment');

    return {
      ok: true,
      data,
      error: '',
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
