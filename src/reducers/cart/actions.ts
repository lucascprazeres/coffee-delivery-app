import { Product } from '../../pages/Home/constants'

export enum ActionTypes {
  AddProductToCart = 'ADD_PRODUCT_TO_CART',
  DecreaseProductAmountOnCart = 'DECREASE_PRODUCT_AMOUNT_ON_CART',
  RemoveProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
}

export function addProductToCartAction(product: Product) {
  return {
    type: ActionTypes.AddProductToCart,
    payload: {
      product,
    },
  }
}

export function decreaseProductAmountOnCartAction(productId: string) {
  return {
    type: ActionTypes.RemoveProductFromCart,
    payload: {
      productId,
    },
  }
}

export function removeProductFromCartAction(productId: string) {
  return {
    type: ActionTypes.RemoveProductFromCart,
    payload: {
      productId,
    },
  }
}
