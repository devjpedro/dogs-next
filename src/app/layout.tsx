import type { Metadata } from 'next';
import Providers from './components/Providers';

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
        <body>{children}</body>
      </Providers>
    </html>
  );
}
