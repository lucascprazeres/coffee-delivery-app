import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--base-card);
  height: 310px;
  width: 256px;
  padding: 1rem;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  img {
    margin-top: -2rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  li {
    background: var(--yellow-light);
    color: var(--yellow-dark);
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-weight: bold;
    font-size: 14px;
  }

  h3 {
    font-size: 20px;
    color: var(--base-subtitle);
  }

  p {
    text-align: center;
    font-size: 14px;
    color: var(--base-label);
    line-height: 18px;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      font-size: 14px;
    }

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 24px;
      font-weight: 800;
    }
  }
`
