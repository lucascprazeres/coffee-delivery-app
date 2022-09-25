import { OrderSuccessContainer, OrderSummary } from './styles'

import deliveryManImage from '../../assets/images/delivery-man.svg'
import { AdvantageItem } from '../../components/AdvantageItem'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { CheckoutFormData, PaymentMethodEnum } from '../Checkout'

interface NavigationState {
  checkout: CheckoutFormData
}

const paymentMethodDisplayTexts = {
  [PaymentMethodEnum.CreditCard]: 'Cartão de crédito',
  [PaymentMethodEnum.DebitCard]: 'Cartão de débito',
  [PaymentMethodEnum.Cash]: 'Dinheiro',
}

export function OrderSuccess() {
  const { state } = useLocation()

  const { checkout } = state as NavigationState

  return (
    <OrderSuccessContainer>
      <div>
        <h1>Uhul! Pedido confirmado</h1>

        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderSummary>
          <AdvantageItem bgColor="#8047F8" icon={MapPin}>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {checkout.street}, {checkout.house_number}
                </strong>
              </span>
              <span>
                {checkout.neighborhood} - {checkout.city}, {checkout.state}
              </span>
            </div>
          </AdvantageItem>

          <AdvantageItem bgColor="#DBAC2C" icon={Timer}>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </AdvantageItem>

          <AdvantageItem bgColor="#C47F17" icon={CurrencyDollar}>
            <div>
              <span>Pagamento na entrega</span>
              <strong>
                {paymentMethodDisplayTexts[checkout.payment_method]}
              </strong>
            </div>
          </AdvantageItem>
        </OrderSummary>
      </div>

      <img src={deliveryManImage} alt="" />
    </OrderSuccessContainer>
  )
}
