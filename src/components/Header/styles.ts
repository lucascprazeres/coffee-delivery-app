import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const HeaderContainer = styled.header`
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;
  margin: 0 auto;

  padding: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  a {
    height: 38px;
    width: 38px;
    border-radius: 6px;
    background: var(--yellow-light);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${breakpoints.desktop} {
    padding: 0;
  }
`

export const Location = styled.span`
  background: var(--purple-light);
  color: var(--purple-dark);
  border-radius: 6px;
  font-size: 14px;
  padding: 10px 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
