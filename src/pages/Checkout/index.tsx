import { CreditCard, CurrencyDollar, MapPin, Trash } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import cep, { CEP } from 'cep-promise'

import { Input } from '../../components/Input'
import {
  CheckoutContainer,
  Address,
  InputGroup,
  PaymentMethodSelector,
  Form,
  Legend,
  PaymentMethod,
  PaymentMethods,
  OrderSummary,
  OrderButton,
  PartialPrice,
  TotalPrice,
  ProductSummary,
  ProductSummaryTitle,
  ProductInfo,
  ProductSummaryControls,
  CheckoutPrices,
  RemoveProductFromCartButton,
} from './styles'

import { ProductAmountInput } from '../../components/ProductAmountInput'
import { useCart } from '../../hooks/useCart'
import { useCallback, useEffect, useMemo } from 'react'
import { DELIVERY_FEE } from './constants'
import { removeNonDigits } from '../../utils/string'
import { maskCEP } from '../../utils/cep'
import { formatPrice } from '../../utils/currency'
import { useNavigate } from 'react-router-dom'

export enum PaymentMethodEnum {
  CreditCard = 'credit-card',
  DebitCard = 'debit-card',
  Cash = 'cash',
}

export interface CheckoutFormData {
  CEP: string
  city: string
  complement: string
  neighborhood: string
  payment_method: PaymentMethodEnum
  state: string
  street: string
  house_number: string
}

export function Checkout() {
  const navigate = useNavigate()
  const { register, watch, handleSubmit, setValue, getValues } =
    useForm<CheckoutFormData>()
  const { cart, addProductToCart, decreaseProductAmountOnCart } = useCart()

  const paymentMethod = watch('payment_method')
  const cepAddress = watch('CEP')
  const cepIsFilled = cepAddress?.length === 9

  const productFee = useMemo(() => {
    return cart.products.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  }, [cart.products])

  const totalFee = productFee + DELIVERY_FEE

  async function handleOrderProduct(checkout: CheckoutFormData) {
    const products = cart.products.map((product) => ({
      id: product.id,
      price: product.price,
    }))
    const { totalFee } = cart

    const order = {
      checkout,
      products,
      totalFee,
    }

    // TODO: simular envio a api
    console.log(order)

    navigate('/success', { state: { checkout } })
  }

  function handleMaskCEP() {
    const sanitizedCEP = removeNonDigits(getValues('CEP'))
    const maskedCEP = maskCEP(sanitizedCEP)
    setValue('CEP', maskedCEP)
  }

  const fillAddressForm = useCallback(
    (address: CEP) => {
      setValue('street', address.street)
      setValue('neighborhood', address.neighborhood)
      setValue('city', address.city)
      setValue('state', address.state)
    },
    [setValue],
  )

  const handleFetchCEP = useCallback(async () => {
    const sanitizedCEP = removeNonDigits(cepAddress)
    const address = await cep(sanitizedCEP)
    fillAddressForm(address)
  }, [cepAddress, fillAddressForm])

  useEffect(() => {
    if (cepIsFilled) {
      handleFetchCEP()
    }
  }, [handleFetchCEP, cepIsFilled])

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <Form>
          <Address>
            <Legend>
              <MapPin color="#DBAC2C" size={20} />
              <div>
                <h3>Endere??o de entrega</h3>
                <p>Informe o endere??o onde deseja receber seu pedido</p>
              </div>
            </Legend>

            <Input
              placeholder="CEP"
              maxWidth={12.5}
              {...register('CEP')}
              onKeyUp={handleMaskCEP}
            />

            <Input placeholder="Rua" {...register('street')} readOnly />

            <InputGroup>
              <Input
                type="number"
                placeholder="N??mero"
                maxWidth={7}
                {...register('house_number')}
              />
              <Input placeholder="Complemento" {...register('complement')} />
            </InputGroup>

            <InputGroup>
              <Input
                placeholder="Bairro"
                maxWidth={12.5}
                {...register('neighborhood')}
                readOnly
              />
              <Input placeholder="Cidade" {...register('city')} readOnly />
              <Input
                placeholder="UF"
                maxWidth={3.75}
                {...register('state')}
                readOnly
              />
            </InputGroup>
          </Address>

          <PaymentMethodSelector>
            <Legend>
              <CurrencyDollar color="#8047F8" size={20} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento ?? feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Legend>

            <PaymentMethods>
              <PaymentMethod
                htmlFor={PaymentMethodEnum.CreditCard}
                isActive={paymentMethod === PaymentMethodEnum.CreditCard}
              >
                <CreditCard color="#8047F8" size={16} />
                CART??O DE CR??DITO
                <input
                  type="radio"
                  id={PaymentMethodEnum.CreditCard}
                  value={PaymentMethodEnum.CreditCard}
                  {...register('payment_method')}
                />
              </PaymentMethod>

              <PaymentMethod
                htmlFor={PaymentMethodEnum.DebitCard}
                isActive={paymentMethod === PaymentMethodEnum.DebitCard}
              >
                <CreditCard color="#8047F8" size={16} />
                CART??O DE D??BITO
                <input
                  type="radio"
                  id={PaymentMethodEnum.DebitCard}
                  value={PaymentMethodEnum.DebitCard}
                  {...register('payment_method')}
                />
              </PaymentMethod>

              <PaymentMethod
                htmlFor={PaymentMethodEnum.Cash}
                isActive={paymentMethod === PaymentMethodEnum.Cash}
              >
                <CreditCard color="#8047F8" size={16} />
                DINHEIRO
                <input
                  type="radio"
                  id={PaymentMethodEnum.Cash}
                  value={PaymentMethodEnum.Cash}
                  {...register('payment_method')}
                />
              </PaymentMethod>
            </PaymentMethods>
          </PaymentMethodSelector>
        </Form>
      </div>
      <div>
        <h2>Caf??s selecionados</h2>

        <OrderSummary>
          {cart.products.map((product) => (
            <ProductSummary key={product.id}>
              <img src={product.imgUrl} alt={`X??cara de ${product.title}`} />
              <ProductInfo>
                <ProductSummaryTitle>
                  <span>{product.title}</span>
                  <strong>{formatPrice(product.price * product.amount)}</strong>
                </ProductSummaryTitle>

                <ProductSummaryControls>
                  <ProductAmountInput
                    height={2}
                    value={product.amount}
                    onIncreaseProductAmount={() => addProductToCart(product)}
                    onDecreaseProductAmount={() =>
                      decreaseProductAmountOnCart(product.id)
                    }
                  />

                  <RemoveProductFromCartButton>
                    <Trash color="#8047F8" size={16} />
                    REMOVER
                  </RemoveProductFromCartButton>
                </ProductSummaryControls>
              </ProductInfo>
            </ProductSummary>
          ))}

          <CheckoutPrices>
            <PartialPrice>
              <span>Total de itens</span>
              <span>{formatPrice(productFee)}</span>
            </PartialPrice>
            <PartialPrice>
              <span>Entrega</span>
              <span>{formatPrice(DELIVERY_FEE)}</span>
            </PartialPrice>
            <TotalPrice>
              <span>Total</span>
              <strong>{formatPrice(totalFee)}</strong>
            </TotalPrice>
          </CheckoutPrices>
          <OrderButton onClick={handleSubmit(handleOrderProduct)}>
            CONFIRMAR PEDIDO
          </OrderButton>
        </OrderSummary>
      </div>
    </CheckoutContainer>
  )
}
