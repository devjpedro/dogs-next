'use client';

import type { ReactNode } from 'react';
import { FormsContainer, LoginContainer } from './styled';

export default function LoginLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LoginContainer>
      <FormsContainer>{children}</FormsContainer>
    </LoginContainer>
  );
}
