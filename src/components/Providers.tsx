'use client';

import { UserContextProvider } from '@/context/user-context';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/global';
import React, { type ReactNode } from 'react';

type UserType = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

export default function Providers({
  children,
  user,
}: {
  children: ReactNode;
  user: UserType | null;
}) {
  return (
    <>
      <UserContextProvider user={user}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </UserContextProvider>
    </>
  );
}
