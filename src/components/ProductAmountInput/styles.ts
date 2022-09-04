import styled from 'styled-components'

interface ProductAmountInputContainerProps {
  $height?: number
}

export const ProductAmountInputContainer = styled.div<ProductAmountInputContainerProps>`
  width: 72px;
  height: ${(props) => props.$height || 2.5}rem;
  background: var(--base-button);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;

  span {
    color: var(--base-title);
  }

  button {
    background: transparent;
    border: none;
    color: var(--purple);
    cursor: pointer;
  }
`
