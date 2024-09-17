import type { Metadata } from 'next';
import Providers from '../components/Providers';
import { type_second } from '@/functions/fonts';

export const metadata: Metadata = {
  title: 'Dogs',
  description: 'Rede social para cachorros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Providers>
        <body className={type_second.variable}>{children}</body>
      </Providers>
    </html>
  );
}
