import type React from 'react';
import { StyledInput } from './styled';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <StyledInput>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} id={props.name} />
      {error && <p>{error}</p>}
    </StyledInput>
  );
}
