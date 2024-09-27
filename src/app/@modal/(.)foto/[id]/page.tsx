import getPhoto from '@/actions/get-photo';
import FeedModal from '@/components/feed/feed-modal';
import { notFound } from 'next/navigation';

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await getPhoto(params.id);

  if (!data) return { title: 'Fotos' };

  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await getPhoto(params.id);

  if (!data) return notFound();

  return <FeedModal photo={data} />;
}
