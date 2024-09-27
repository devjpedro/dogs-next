'use client';

import type { PhotoData } from '@/actions/get-photo';
import PhotoContent from '../photo/photo-content';
import { ModalContainer } from './styled';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) router.back();
  };

  React.useEffect(() => {
    const handlePress = (event: KeyboardEvent) => {
      console.log(event);

      if (event.key === 'Escape') router.back();
    };

    if (pathname.includes('foto')) {
      window.addEventListener('keydown', handlePress);
    }

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, [router, pathname]);

  if (!pathname.includes('foto')) return null;

  return (
    <ModalContainer onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </ModalContainer>
  );
}
