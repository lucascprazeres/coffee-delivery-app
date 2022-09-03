import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
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

            <Input placeholder="CEP" maxWidth={12.5} />

            <Input placeholder="Rua" />

            <InputGroup>
              <Input type="number" placeholder="Número" maxWidth={7} />
              <Input placeholder="Complemento" />
            </InputGroup>

            <InputGroup>
              <Input placeholder="Bairro" maxWidth={12.5} />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" maxWidth={3.75} />
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
              <PaymentMethod htmlFor="credit-card">
                <CreditCard color="#8047F8" size={16} />
                CARTÃO DE CRÉDITO
                <input type="radio" name="payment-method" id="credit-card" />
              </PaymentMethod>

              <PaymentMethod htmlFor="debit-card">
                <Bank color="#8047F8" size={16} />
                CARTÃO DE DÉBITO
                <input type="radio" name="payment-method" id="debit-card" />
              </PaymentMethod>

              <PaymentMethod htmlFor="cash">
                <Money color="#8047F8" size={16} />
                DINHEIRO
                <input type="radio" name="payment-method" id="cash" />
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
