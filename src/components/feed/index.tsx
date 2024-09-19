import type { PhotoType } from '@/actions/get-photos';
import FeedPhotos from './feed-photos';

export default function Feed({ photos }: { photos: PhotoType[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
