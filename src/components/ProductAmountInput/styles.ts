import styled from 'styled-components'

export const ProductAmountInputContainer = styled.div`
  width: 72px;
  height: 2.5rem;
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
