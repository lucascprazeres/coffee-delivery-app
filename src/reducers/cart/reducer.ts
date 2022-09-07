import { produce } from 'immer'
import { ActionTypes } from './actions'

interface Product {
  id: string
  imgUrl: string
  title: string
  categories: string[]
  description: string
  price: number
  amount: number
}

export interface CartState {
  products: Product[]
  totalFee: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.AddProductToCart: {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.product.id,
      )

      if (productIndex < 0) {
        return produce(state, (draft) => {
          draft.products.push({
            ...action.payload.product,
            amount: 1,
          })
          draft.totalFee += action.payload.product.price
        })
      }

      return produce(state, (draft) => {
        draft.products[productIndex].amount += 1
        draft.totalFee += action.payload.product.price
      })
    }
    case ActionTypes.DecreaseProductAmountOnCart: {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId,
      )

      if (state.products[productIndex].amount > 1) {
        return produce(state, (draft) => {
          draft.products[productIndex].amount -= 1
          draft.totalFee -= state.products[productIndex].price
        })
      }

      return produce(state, (draft) => {
        draft.products.splice(productIndex, 1)
        draft.totalFee -= state.products[productIndex].price
      })
    }

    case ActionTypes.RemoveProductFromCart: {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId,
      )

      return produce(state, (draft) => {
        draft.products.splice(productIndex, 1)
        draft.totalFee -= state.products[productIndex].price
      })
    }
    default:
      return state
  }
}
