import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { ProductAmountInputContainer } from './styles'

interface ProductAmountInputProps {
  height?: number
}

export function ProductAmountInput(props: ProductAmountInputProps) {
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
    <ProductAmountInputContainer role="input" $height={props.height}>
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
