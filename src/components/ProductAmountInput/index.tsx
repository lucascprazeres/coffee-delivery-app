import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { ProductAmountInputContainer } from './styles'

export function ProductAmountInput() {
  const [productAmount, setProductAmount] = useState(0)

  function increaseProductAmount() {
    setProductAmount((state) => state + 1)
  }

  function decreaseProductAmount() {
    if (productAmount > 0) {
      setProductAmount((state) => state - 1)
    }
  }

  return (
    <ProductAmountInputContainer role="input">
      <button onClick={decreaseProductAmount}>
        <Minus weight="bold" />
      </button>
      <span>{productAmount}</span>
      <button onClick={increaseProductAmount}>
        <Plus weight="bold" />
      </button>
    </ProductAmountInputContainer>
  )
}
