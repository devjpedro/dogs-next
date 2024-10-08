'use client';

import type { PhotoType } from '@/actions/get-photos';
import FeedPhotos from './feed-photos';
import React from 'react';
import getPhotos from '@/actions/get-photos';
import Loading from '../helper/loading';
import { LoadingWrapper } from './styled';

export default function Feed({
  photos,
  user,
}: {
  photos: PhotoType[];
  user?: 0 | string;
}) {
  const [photosFeed, setPhotosFeed] = React.useState<PhotoType[]>(photos);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [infinite, setInfinite] = React.useState(
    photos.length < 6 ? false : true,
  );

  const fetching = React.useRef(false);

  function infiniteScroll() {
    if (fetching.current) return;

    fetching.current = true;
    setLoading(true);

    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    if (page === 1) return;

    async function getPagePhotos(page: number) {
      const actionData = await getPhotos(
        { page, total: 6, user: 0 },
        {
          cache: 'no-store',
        },
      );

      if (actionData && actionData.data !== null) {
        const { data } = actionData;

        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);

        if (data.length < 6) setInfinite(false);
      }
    }

    getPagePhotos(page);

    // console.log({ page });
  }, [page]);

  React.useEffect(() => {
    if (infinite) {
      window.addEventListener('scroll', infiniteScroll);
      window.addEventListener('wheel', infiniteScroll);
    } else {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <LoadingWrapper>
        {infinite ? loading && <Loading /> : <p>Não existem mais postagens.</p>}
      </LoadingWrapper>
    </div>
  );
}
