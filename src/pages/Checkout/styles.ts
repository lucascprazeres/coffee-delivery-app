import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const CheckoutContainer = styled.div`
  width: 100%;
  padding: 0 2rem;

  @media ${breakpoints.desktop} {
    max-width: 70rem;
    margin: 0 auto;
    padding: 0;
  }
`
