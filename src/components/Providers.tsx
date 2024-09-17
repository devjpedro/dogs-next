'use client';

import { GlobalStyle } from '@/styles/global';
import React, { type ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <GlobalStyle />
    </>
  );
}
