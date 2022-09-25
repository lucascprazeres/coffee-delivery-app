import styled from 'styled-components'

export const OrderSuccessContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: calc(100vh - 6.5rem);
  width: 100%;
  max-width: 70rem;
  margin: 5rem auto 0;

  h1 {
    font-size: 2rem;
    color: var(--yellow-dark);
  }

  p {
    margin-bottom: 2.5rem;
  }
`

export const OrderSummary = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, #dbac2c 0%, #8047f8 100%) 1;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 38px;
  width: 100%;
`
