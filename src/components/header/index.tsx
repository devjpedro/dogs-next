'use client';

import Link from 'next/link';
import { HeaderContainer, HeaderNav, LoginHeader, LogoHeader } from './styled';
import Image from 'next/image';

export default function Header() {
  const user = false;

  return (
    <HeaderContainer>
      <HeaderNav className="container">
        <LogoHeader href="/">
          <Image
            src={'/assets/dogs.svg'}
            alt="Dogs"
            width={28}
            height={22}
            priority
          />
        </LogoHeader>
        {user ? (
          <LoginHeader href="/conta">dogs</LoginHeader>
        ) : (
          <LoginHeader href="/login">Login / Criar</LoginHeader>
        )}
      </HeaderNav>
    </HeaderContainer>
  );
}
