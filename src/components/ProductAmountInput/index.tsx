import { Minus, Plus } from 'phosphor-react'
import { ProductAmountInputContainer } from './styles'

interface ProductAmountInputProps {
  height?: number
  value: number
  onIncreaseProductAmount: () => void
  onDecreaseProductAmount: () => void
}

export function ProductAmountInput(props: ProductAmountInputProps) {
  function handleDecreaseProductAmount() {
    if (props.value > 0) {
      props.onDecreaseProductAmount()
    }
  }

  return (
    <ProductAmountInputContainer role="input" $height={props.height}>
      <button onClick={handleDecreaseProductAmount}>
        <Minus weight="bold" />
      </button>
      <span>{props.value}</span>
      <button onClick={props.onIncreaseProductAmount}>
        <Plus weight="bold" />
      </button>
    </ProductAmountInputContainer>
  )
}
