'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useMedia from '@/hooks/useMedia';
import FeedIcon from '@/icons/feed-icon';
import EstatisticasIcon from '@/icons/estatisticas-icon';
import AdicionarIcon from '@/icons/adicionar-icon';
import SairIcon from '@/icons/sair-icon';
import {
  HeaderContainer,
  MobileButton,
  NavContainer,
  NavMobile,
} from './styled';
import logout from '@/actions/logout';
import { useUser } from '@/context/user-context';

function getTitle(pathname: string) {
  switch (pathname) {
    case '/conta/postar':
      return 'Poste sua Foto';

    case '/conta/estatisticas':
      return 'Estatísticas';

    default:
      return 'Minha Conta';
  }
}

const ContaHeader = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { setUser } = useUser();
  const mobile = useMedia('(max-width: 40rem)');
  const pathname = usePathname();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <HeaderContainer>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <MobileButton
          className={`${mobileMenu && 'mobileButtonActive'}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></MobileButton>
      )}

      {mobile && (
        <NavMobile className={`${mobileMenu && 'navMobileActive'}`}>
          <Link href="/conta" className={pathname === '/conta' ? 'active' : ''}>
            <FeedIcon />
            {mobile && 'Minhas Fotos'}
          </Link>
          <Link
            href="/conta/estatisticas"
            className={pathname === '/conta/estatisticas' ? 'active' : ''}
          >
            <EstatisticasIcon />
            {mobile && 'Estatísticas'}
          </Link>
          <Link
            href="/conta/postar"
            className={pathname === '/conta/postar' ? 'active' : ''}
          >
            <AdicionarIcon />
            {mobile && 'Adicionar Foto'}
          </Link>
          <button onClick={handleLogout}>
            <SairIcon />
            {mobile && 'Sair'}
          </button>
        </NavMobile>
      )}

      {!mobile && (
        <NavContainer>
          <Link href="/conta" className={pathname === '/conta' ? 'active' : ''}>
            <FeedIcon />
            {mobile && 'Minhas Fotos'}
          </Link>
          <Link
            href="/conta/estatisticas"
            className={pathname === '/conta/estatisticas' ? 'active' : ''}
          >
            <EstatisticasIcon />
            {mobile && 'Estatísticas'}
          </Link>
          <Link
            href="/conta/postar"
            className={pathname === '/conta/postar' ? 'active' : ''}
          >
            <AdicionarIcon />
            {mobile && 'Adicionar Foto'}
          </Link>
          <button onClick={handleLogout}>
            <SairIcon />
            {mobile && 'Sair'}
          </button>
        </NavContainer>
      )}
    </HeaderContainer>
  );
};

export default ContaHeader;
