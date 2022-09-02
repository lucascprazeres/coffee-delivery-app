import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  height: calc(100vh - 104px);
  background: url('/src/assets/images/blur-background.png') no-repeat center;
  background-size: cover;
`

export const HomeContent = styled.main`
  height: 100%;
`

export const HeroSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  max-width: 1120px;
  margin: 0 auto;

  h1 {
    font-size: 48px;
    line-height: 1.3;

    margin-bottom: 16px;
  }

  p {
    color: var(--base-subtitle);
    font-size: 20px;
    line-height: 1.3;
  }

  ul {
    margin-top: 66px;
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
  }
`

export const ProductsSection = styled.section`
  height: 100%;

  max-width: 1120px;
  margin: 0 auto;

  h2 {
    font-size: 32px;
    color: var(--base-subtitle);
    margin-bottom: 3rem;
  }
`
