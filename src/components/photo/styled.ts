import styled, { keyframes } from 'styled-components';

/* PHOTO CONTENT */

export const scaleUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const latir = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

  @media (max-width: 64rem), (max-height: 36rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
    grid-template-rows: repeat(4, auto);
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

/* PHOTO DELETE */

export const DeleteButton = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;

/* PHOTO COMMENTS */
export const CommentsContainer = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  &.single {
    padding: 0px;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

/* PHOTO COMMENTS FORM */

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  &.single {
    margin: 1rem 0;
  }
`;

export const CustomTextarea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: var(--type-first);
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #eee;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const CustomButton = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  &:focus,
  &:hover {
    outline: none;

    svg path {
      fill: #fea;
      stroke: #fb1;
    }

    svg g {
      animation: latir 0.6s infinite;
    }
  }
`;
