import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  HeroSection,
  HomeContainer,
  HomeContent,
  ProductList,
  ProductsSection,
} from './styles'

import { AdvantageItem } from '../../components/AdvantageItem'
import { ProductCard } from '../../components/ProductCard'

import bgHeroImg from '../../assets/images/bg-hero.png'
import { PRODUCTS } from './constants'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HeroSection>
          <div>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <ul>
              <AdvantageItem icon={ShoppingCart} bgColor="#C47F17">
                <p>Compra simples e segura</p>
              </AdvantageItem>

              <AdvantageItem icon={Package} bgColor="#574F4D">
                <p>Embalagem mantém o café intacto</p>
              </AdvantageItem>

              <AdvantageItem icon={Timer} bgColor="#DBAC2C">
                <p>Entrega rápida e rastreada</p>
              </AdvantageItem>

              <AdvantageItem icon={Coffee} bgColor="#8047F8">
                <p>O café chega fresquinho até você</p>
              </AdvantageItem>
            </ul>
          </div>
          <img src={bgHeroImg} alt="" />
        </HeroSection>

        <ProductsSection>
          <h2>Nossos cafés</h2>

          <ProductList>
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ProductList>
        </ProductsSection>
      </HomeContent>
    </HomeContainer>
  )
}
