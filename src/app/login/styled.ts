import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url('/assets/login.jpg') no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    & {
      grid-template-columns: 1fr;
    }
    &::before {
      display: none;
    }
  }
`;

export const FormsContainer = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;

  @media (max-width: 40rem) {
    & {
      max-width: 100%;
    }
  }
`;
