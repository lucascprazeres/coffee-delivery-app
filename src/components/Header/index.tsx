import { HeaderContainer, Location } from './styles'

import logoImg from '../../assets/icons/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <div>
        <Location>
          <MapPin color="#8047F8" size={20} weight="fill" />
          Belém, PA
        </Location>

        <a href="#">
          <ShoppingCart color="#C47F17" size={20} weight="fill" />
        </a>
      </div>
    </HeaderContainer>
  )
}
