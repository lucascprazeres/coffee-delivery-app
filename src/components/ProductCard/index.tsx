import { ShoppingCart } from 'phosphor-react'
import { Product } from '../../pages/Home/constants'
import { ProductAmountInput } from '../ProductAmountInput'
import { ProductCardContainer } from './styles'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const priceFormated = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(product.price / 100)
    .replace(/[R$]/g, '') // remove R$

  return (
    <ProductCardContainer>
      <img src={product.imgUrl} alt={`Xícara de ${product.title}`} />
      <ul>
        {product.categories.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <h3>{product.title}</h3>
      <p>{product.description}</p>

      <footer>
        <span>
          R$ <strong>{priceFormated}</strong>
        </span>

        <div>
          <ProductAmountInput />
          <a href="#">
            <ShoppingCart color="#fff" size={20} weight="fill" />
          </a>
        </div>
      </footer>
    </ProductCardContainer>
  )
}
