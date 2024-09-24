import styled from 'styled-components';

export const FeedContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Visualizacao = styled.span`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  grid-area: 1/1;
  display: none;

  &::before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    background: url('/assets/visualizacao.svg') no-repeat;
  }
`;

export const Photo = styled.li`
  a {
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    grid-area: 1/1;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  &:hover {
    ${Visualizacao} {
      display: flex;
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  height: 100px;
  margin: 1rem auto;

  p {
    text-align: center;
    margin: auto;
    color: #888;
  }
`;
