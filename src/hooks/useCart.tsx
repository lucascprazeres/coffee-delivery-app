import { createContext, ReactNode, useContext, useReducer } from 'react'
import { Product } from '../pages/Home/constants'
import {
  addProductToCartAction,
  decreaseProductAmountOnCartAction,
  removeProductFromCartAction,
} from '../reducers/cart/actions'
import { cartReducer, CartState } from '../reducers/cart/reducer'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: CartState
  addProductToCart: (product: Product) => void
  decreaseProductAmountOnCart: (productId: string) => void
  removeProductFromCart: (productId: string) => void
}
const CartContext = createContext<CartContextData>({} as CartContextData)

export function useCart() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    totalFee: 0,
  })

  const { products, totalFee } = cartState

  function addProductToCart(product: Product) {
    dispatch(addProductToCartAction(product))
  }

  function decreaseProductAmountOnCart(productId: string) {
    const product = products.find((prod) => prod.id === productId)

    if (!product) {
      return
    }

    if (product.amount > 0) {
      return dispatch(decreaseProductAmountOnCartAction(productId))
    }

    dispatch(removeProductFromCartAction(productId))
  }

  function removeProductFromCart(productId: string) {
    dispatch(removeProductFromCartAction(productId))
  }

  return (
    <CartContext.Provider
      value={{
        cart: { products, totalFee },
        addProductToCart,
        decreaseProductAmountOnCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
