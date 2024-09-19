import type { Metadata } from 'next';
import { type_second } from '@/functions/fonts';
import Header from '@/components/header';
import Providers from '@/components/providers';
import Footer from '@/components/footer';

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
      <body className={type_second.variable}>
        <Providers>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
