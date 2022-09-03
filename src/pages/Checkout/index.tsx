import { MapPin } from 'phosphor-react'
import { Input } from '../../components/Input'
import { CheckoutContainer, Form, InputGroup } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <Form>
          <fieldset>
            <legend>
              <MapPin color="#DBAC2C" size={20} />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </legend>

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
          </fieldset>
        </Form>
      </div>
      <aside>
        <h2>Cafés selecionados</h2>
      </aside>
    </CheckoutContainer>
  )
}
