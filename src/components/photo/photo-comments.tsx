'use client';

import React from 'react';
import PhotoCommentsForm from './photo-comments-form';
import { useUser } from '@/context/user-context';
import type { Comment } from '@/actions/get-photo';
import { CommentsContainer } from './styled';

interface PhotoCommentsProps {
  comments: Comment[];
  single: boolean;
  id: number;
}

const PhotoComments = (props: PhotoCommentsProps) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);

  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <CommentsContainer
        ref={commentsSection}
        className={`${props.single ? 'single' : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </CommentsContainer>
      {user && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
