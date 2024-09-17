import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const LogoHeader = styled(Link)`
  padding: 0.5rem 0;
`;

export const LoginHeader = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url('/assets/usuario.svg') no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
