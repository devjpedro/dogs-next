import React from 'react';
import { StyledButton } from './styled';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonType) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
