import getPhotos from '@/actions/get-photos';
import getUser from '@/actions/get-user';
import Feed from '@/components/feed';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minha Conta',
};

export default async function ContaPage() {
  const { data: user } = await getUser();
  const { data } = await getPhotos({ user: user?.username });

  return (
    <main>
      {!!data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p
            style={{ color: '#444', fontSize: '1.25rem', marginBottom: '1rem' }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href="/conta/postar"
            style={{ display: 'inline-block' }}
            className="button"
          >
            Postar Foto
          </Link>
        </div>
      )}
    </main>
  );
}
