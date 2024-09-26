'use client';

import React from 'react';
import type { Comment } from '@/actions/get-photo';
import { useFormState, useFormStatus } from 'react-dom';
import { CustomButton, CustomTextarea, FormContainer } from './styled';
import ErrorMessage from '../helper/error-message';
import postComment from '@/actions/post-comment';
import EnviarIcon from '@/icons/enviar-icon';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <CustomButton type="submit" disabled={pending}>
      <EnviarIcon />
    </CustomButton>
  );
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: {
  single: boolean;
  id: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}) {
  const [comment, setComment] = React.useState('');

  const [state, action] = useFormState(postComment, {
    ok: false,
    data: null,
    error: '',
  });

  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment('');
    }
  }, [state, setComments]);

  return (
    <FormContainer action={action} className={`${single ? 'single' : ''}`}>
      <input type="hidden" name="id" id="id" value={id} />
      <CustomTextarea
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></CustomTextarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </FormContainer>
  );
}
