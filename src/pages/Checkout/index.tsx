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
} from './styles'

export function Checkout() {
  const { register, watch } = useForm()

  const paymentMethod = watch('payment-method')

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
                {...register('street_number')}
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
                  {...register('payment-method')}
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
                  {...register('payment-method')}
                />
              </PaymentMethod>

              <PaymentMethod htmlFor="cash" isActive={paymentMethod === 'cash'}>
                <CreditCard color="#8047F8" size={16} />
                DINHEIRO
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  {...register('payment-method')}
                />
              </PaymentMethod>
            </PaymentMethods>
          </PaymentMethodSelector>
        </Form>
      </div>
      <aside>
        <h2>Cafés selecionados</h2>
      </aside>
    </CheckoutContainer>
  )
}
