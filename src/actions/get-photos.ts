'use server';

export type PhotoType = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

export default async function getPhotos() {
  const response = await fetch(
    'https://dogsapi.origamid.dev/json/api/photo/?_page=1&total=6&_user=0',
    {
      next: {
        revalidate: 10,
        tags: ['photos'],
      },
    },
  );

  const data = (await response.json()) as PhotoType[];

  return data;
}
