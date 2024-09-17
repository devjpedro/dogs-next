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
      <Providers>
        <body className={type_second.variable}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
