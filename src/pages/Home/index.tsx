import { HomeContainer, HomeContent } from './styles'

import bgHeroImg from '../../assets/images/bg-hero.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { AdvantageItem } from '../../components/AdvantageItem'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <ul>
            <AdvantageItem
              icon={ShoppingCart}
              bgColor="#C47F17"
              text="Compra simples e segura"
            />

            <AdvantageItem
              icon={Package}
              bgColor="#574F4D"
              text="Embalagem mantém o café intacto"
            />

            <AdvantageItem
              icon={Timer}
              bgColor="#DBAC2C"
              text="Entrega rápida e rastreada"
            />

            <AdvantageItem
              icon={Coffee}
              bgColor="#8047F8"
              text="O café chega fresquinho até você"
            />
          </ul>
        </div>
        <img src={bgHeroImg} alt="" />
      </HomeContent>
    </HomeContainer>
  )
}
