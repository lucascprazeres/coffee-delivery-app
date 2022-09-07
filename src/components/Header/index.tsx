import { HeaderContainer, Location } from './styles'

import logoImg from '../../assets/icons/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <div>
        <Location>
          <MapPin color="#8047F8" size={20} weight="fill" />
          Belém, PA
        </Location>

        <Link to="/checkout">
          <If condition={cart.products.length}>
            <span>{cart.products.length}</span>
          </If>
          <ShoppingCart color="#C47F17" size={20} weight="fill" />
        </Link>
      </div>
    </HeaderContainer>
  )
}
