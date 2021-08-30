import { ReactNode } from 'react';
import { StyledButton, GhostButton } from './Button.styled';

export type ButtonProps = {
  children: ReactNode;
  ghost?: boolean;
};

export function Button({ children, ghost }: ButtonProps) {
  const OptionalStyles = ghost ? GhostButton : '';

  return (
    <button className="button" type="button">
      {children}
      <style jsx>{StyledButton}</style>
      <style jsx>{OptionalStyles}</style>
    </button>
  );
}
