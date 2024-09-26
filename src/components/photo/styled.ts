import styled, { keyframes } from 'styled-components';

export const scaleUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const PhotoContainer = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} 0.3s forwards;

  &.single {
    grid-template-columns: 1fr;
    height: auto;
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const ImageContainer = styled.div`
  grid-row: 1/4;

  &.single {
    grid-row: 1;
    border-radius: 0.4rem;
    overflow: hidden;
  }
`;

export const DetailsContainer = styled.div`
  padding: 2rem 2rem 0 2rem;

  &.single {
    padding: 1rem 0 0 0;
  }
`;

export const Author = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:hover {
    text-decoration: underline;
  }
`;

export const Visualizacoes = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url('../../Assets/visualizacao-black.svg');
  }
`;

export const AttributesList = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li {
    margin-right: 2rem;
  }

  li::before {
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
    margin-top: 5px;
  }
`;
