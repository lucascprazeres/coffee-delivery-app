import styled, { css } from 'styled-components'
import { InputProps } from '.'
import { breakpoints } from '../../styles/breakpoints'

export const CustomInput = styled.input<InputProps>`
  height: 42px;
  background: var(--base-input);
  border: 1px solid var(--base-button);
  width: 100%;
  border-radius: 4px;
  padding: 1rem;
  font-size: 14px;

  &::placeholder {
    color: var(--base-label);
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  @media ${breakpoints.desktop} {
    ${(props) =>
      props.maxWidth &&
      css`
        max-width: ${props.maxWidth}rem;
      `}
  }
`
