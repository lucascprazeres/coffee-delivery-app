import { CreditCard, CurrencyDollar, MapPin } from 'phosphor-react'
import { useForm } from 'react-hook-form'
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
} from './styles'

import expressoImg from '../../assets/images/expresso-tradicional.png'
import { ProductAmountInput } from '../../components/ProductAmountInput'

interface AddressFormData {
  CEP: string
  city: string
  complement: string
  neighborhood: string
  payment_method: string
  state: string
  street: string
  house_number: string
}

export function Checkout() {
  const { register, watch, handleSubmit } = useForm<AddressFormData>()

  const paymentMethod = watch('payment_method')

  async function handleOrderProduct(address: AddressFormData) {
    console.log(address)
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <Form>
          <Address>
            <Legend>
              <MapPin color="#DBAC2C" size={20} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Legend>

            <Input placeholder="CEP" maxWidth={12.5} {...register('CEP')} />

            <Input placeholder="Rua" {...register('street')} />

            <InputGroup>
              <Input
                type="number"
                placeholder="Número"
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
              />
              <Input placeholder="Cidade" {...register('city')} />
              <Input placeholder="UF" maxWidth={3.75} {...register('state')} />
            </InputGroup>
          </Address>

          <PaymentMethodSelector>
            <Legend>
              <CurrencyDollar color="#8047F8" size={20} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Legend>

            <PaymentMethods>
              <PaymentMethod
                htmlFor="credit-card"
                isActive={paymentMethod === 'credit-card'}
              >
                <CreditCard color="#8047F8" size={16} />
                CARTÃO DE CRÉDITO
                <input
                  type="radio"
                  id="credit-card"
                  value="credit-card"
                  {...register('payment_method')}
                />
              </PaymentMethod>

              <PaymentMethod
                htmlFor="debit-card"
                isActive={paymentMethod === 'debit-card'}
              >
                <CreditCard color="#8047F8" size={16} />
                CARTÃO DE DÉBITO
                <input
                  type="radio"
                  id="debit-card"
                  value="debit-card"
                  {...register('payment_method')}
                />
              </PaymentMethod>

              <PaymentMethod htmlFor="cash" isActive={paymentMethod === 'cash'}>
                <CreditCard color="#8047F8" size={16} />
                DINHEIRO
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  {...register('payment_method')}
                />
              </PaymentMethod>
            </PaymentMethods>
          </PaymentMethodSelector>
        </Form>
      </div>
      <div>
        <h2>Cafés selecionados</h2>

        <OrderSummary>
          <ProductSummary>
            <img src={expressoImg} alt="" />
            <ProductInfo>
              <ProductSummaryTitle>
                <span>Expresso Tradicional</span>
                <strong>R$ 9,90</strong>
              </ProductSummaryTitle>

              <ProductSummaryControls>
                <ProductAmountInput height={2} />
              </ProductSummaryControls>
            </ProductInfo>
          </ProductSummary>

          <CheckoutPrices>
            <PartialPrice>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </PartialPrice>
            <PartialPrice>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </PartialPrice>
            <TotalPrice>
              <span>Total</span>
              <strong>R$ 33,20</strong>
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
