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
  height: 100%;
  background: var(--base-card);
  width: 100%;
  padding: 1rem;
  border-radius: 6px;

  fieldset {
    height: 100%;
    border: none;

    legend {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 2rem;

      > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
      }
    }

    input {
      margin-bottom: 1rem;
    }
  }

  @media ${breakpoints.desktop} {
    max-width: 40rem;
    height: 23.25rem;
    padding: 2rem;
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
