import styled, { css } from 'styled-components';

type WrapperProps = {
  kind: 'primary' | 'secondary';
};

const wrapperModifiers = {
  primary: () => css`
    background: #8257e5;
  `,
  secondary: () => css`
    background: #333333;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ kind }) => css`
    padding: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    color: #ffffff;

    ${!!kind && wrapperModifiers[kind]()}
  `}
`;
