import styled, { css } from 'styled-components'
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
  padding: 7em 1rem 1rem;
  height: 100%;
  background: var(--base-card);
  width: 100%;
  border-radius: 6px;

  border: none;

  @media ${breakpoints.tablet} {
    padding: 6em 1rem 1rem;
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

interface PaymentMethodProps {
  isActive: boolean
}

export const PaymentMethod = styled.label<PaymentMethodProps>`
  position: relative;
  height: 50px;
  width: 100%;
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
    position: absolute;
    top: 0;
    right: 0;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  ${(props) =>
    props.isActive &&
    css`
      background: var(--purple-light);
      border: 1px solid var(--purple);
    `}

  @media ${breakpoints.tablet} {
    width: 178px;
  }
`

export const OrderSummary = styled.aside`
  width: 100%;
  border-radius: 6px;
  background: var(--base-card);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media ${breakpoints.desktop} {
    width: 448px;
  }
`

export const ProductSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 2px solid var(--base-button);
`

export const ProductInfo = styled.div`
  width: 100%;

  > div {
    margin-bottom: 0.5rem;
  }
`

export const ProductSummaryTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RemoveProductFromCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--base-button);
  border: 0;
  border-radius: 6px;
  height: 2rem;
  width: 5.625rem;
  font-size: 0.75rem;
`

export const ProductSummaryControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CheckoutPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PartialPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--base-subtitle);
  font-weight: bold;
  font-size: 20px;
`

export const OrderButton = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  height: 48px;
  width: 100%;
  background: var(--yellow);
  color: var(--white);
  font-weight: bold;
  font-size: 14px;
`
