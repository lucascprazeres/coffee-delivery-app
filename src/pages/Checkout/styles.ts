import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const CheckoutContainer = styled.div`
  width: 100%;
  padding: 0 1rem;

  > div {
    flex: 1;
    margin-bottom: 2rem;
  }

  aside {
    flex: 1;
  }

  h2 {
    font-size: 18px;
    color: var(--base-subtitle);
    margin-bottom: 1rem;
  }

  @media ${breakpoints.tablet} {
    padding: 0 2rem;
  }

  @media ${breakpoints.desktop} {
    height: calc(100vh - 6.5rem);
    max-width: 70rem;
    margin: 0 auto;
    padding: 0;

    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
`

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const Legend = styled.legend`
  position: absolute;
  top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    margin-top: 0.25rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`

export const Address = styled.fieldset`
  position: relative;
  padding: 8rem 1rem 1rem;
  height: 100%;
  background: var(--base-card);
  width: 100%;
  border-radius: 6px;

  border: none;

  input {
    margin-bottom: 1rem;
  }

  @media ${breakpoints.tablet} {
    padding: 7rem 2rem 2rem;
  }

  @media ${breakpoints.desktop} {
    max-width: 40rem;
    height: 23.25rem;
  }
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`

export const PaymentMethodSelector = styled.fieldset`
  position: relative;
  padding: 6rem 1rem 1rem;
  height: 100%;
  background: var(--base-card);
  width: 100%;
  border-radius: 6px;

  border: none;
`

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const PaymentMethod = styled.label`
  height: 50px;
  width: 178px;
  background: var(--base-button);
  font-size: 0.75rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }

  input {
    visibility: hidden;
  }
`
