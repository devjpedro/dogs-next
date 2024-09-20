'use client';

import getUser, { type UserType } from '@/actions/get-user';
import { HeaderContainer, HeaderNav, LoginHeader, LogoHeader } from './styled';
import Image from 'next/image';
import React from 'react';

export default function HeaderClient({ user }: { user: UserType | null }) {
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
          <LoginHeader href="/conta">{user.username}</LoginHeader>
        ) : (
          <LoginHeader href="/login">Login / Criar</LoginHeader>
        )}
      </HeaderNav>
    </HeaderContainer>
  );
}
