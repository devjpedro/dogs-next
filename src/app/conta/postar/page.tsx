import ContaPhotoPost from '@/components/conta/conta-photo-post';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
};

export default async function PostarPage() {
  return <ContaPhotoPost />;
}
