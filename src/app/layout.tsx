import type { Metadata } from 'next';
import { type_second } from '@/functions/fonts';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { UserContextProvider } from '@/context/user-context';
import { GlobalStyle } from '@/styles/global';
import StyledComponentsRegistry from '@/lib/registry';
import getUser from '@/actions/get-user';

export const metadata: Metadata = {
  title: 'Dogs',
  description: 'Rede social para cachorros',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await getUser();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <StyledComponentsRegistry>
            <div className="App">
              <Header />
              <main className="AppBody">{children}</main>
              <Footer />
            </div>
            <GlobalStyle />
          </StyledComponentsRegistry>
        </UserContextProvider>
      </body>
    </html>
  );
}
