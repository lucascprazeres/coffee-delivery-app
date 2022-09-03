import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const HeaderContainer = styled.header`
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;
  margin: 0 auto;

  padding: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  a:last-child {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 6px;
    background: var(--yellow-light);

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-decoration: none;

    span {
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 0.625rem;
      color: var(--white);
      background: var(--yellow-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;

      position: absolute;
      top: -0.25rem;
      right: -0.25rem;
    }
  }

  @media ${breakpoints.desktop} {
    padding: 2rem;
  }

  @media ${breakpoints.desktop} {
    padding: 0;
  }
`

export const Location = styled.span`
  background: var(--purple-light);
  color: var(--purple-dark);
  border-radius: 6px;
  font-size: 0.875;
  padding: 0.625rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`
