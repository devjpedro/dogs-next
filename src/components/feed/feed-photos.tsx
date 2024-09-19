'use client';

import type { PhotoType } from '@/actions/get-photos';
import Image from 'next/image';
import Link from 'next/link';
import { FeedContainer, Photo, Visualizacao } from './styled';

export default function FeedPhotos({ photos }: { photos: PhotoType[] }) {
  return (
    <div>
      <FeedContainer className="animeLeft">
        {photos.map((photo, index) => (
          <Photo key={photo.id + index}>
            <Link href={`/foto/${photo.id}`} scroll={false}>
              <Image
                src={photo.src}
                alt={photo.title}
                width={1500}
                height={1500}
                sizes="80vw"
              />
              <Visualizacao>{photo.acessos}</Visualizacao>
            </Link>
          </Photo>
        ))}
      </FeedContainer>
    </div>
  );
}
