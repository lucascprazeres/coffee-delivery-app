import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

export const HomeContainer = styled.div`
  flex: 1;
  height: calc(100vh);
  background: url('/src/assets/images/blur-background.png') no-repeat center;
  background-size: cover;
  padding: 0 2rem;

  @media ${breakpoints.tablet} {
    height: calc(60vh);
  }

  @media ${breakpoints.desktop} {
    height: calc(100vh - 6.5rem);
    padding: 0;
  }
`

export const HomeContent = styled.main`
  height: 100%;
  padding-bottom: 5rem;
`

export const HeroSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  max-width: 70rem;
  margin: 0 auto;

  img {
    display: none;

    @media ${breakpoints.desktop} {
      display: block;
    }
  }

  h1 {
    font-size: 3rem;
    line-height: 1.3;

    margin-bottom: 1rem;
  }

  p {
    color: var(--base-subtitle);
    font-size: 1.25rem;
    line-height: 1.3;
  }

  ul {
    margin-top: 4rem;
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const ProductsSection = styled.section`
  height: auto;

  max-width: 70rem;
  margin: 0 auto;

  padding-bottom: 5rem;

  h2 {
    font-size: 2rem;
    color: var(--base-subtitle);
    margin-bottom: 3rem;
  }
`

export const ProductList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;

  @media ${breakpoints.desktop} {
    justify-content: flex-start;
    gap: 2rem;
  }
`
