'use client';

import Image from 'next/image';
import { FooterContainer } from './styled';

export default function Footer() {
  return (
    <FooterContainer>
      <Image src="/assets/dogs-footer.svg" alt="Dogs" width={28} height={22} />
      <p>Dogs. Alguns direitos reservados.</p>
    </FooterContainer>
  );
}
