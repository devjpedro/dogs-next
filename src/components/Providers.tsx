'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/global';
import React, { type ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <StyledComponentsRegistry>
        {children}
        <GlobalStyle />
      </StyledComponentsRegistry>
    </>
  );
}
