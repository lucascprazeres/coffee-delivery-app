import { ProductCardContainer } from './styles'

interface ProductCardProps {
  imgUrl: string
  title: string
  categories: string[]
  description: string
  price: number
}

export function ProductCard(props: ProductCardProps) {
  const priceFormated = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(props.price / 100)
    .replace(/[R$]/g, '') // remove R$

  return (
    <ProductCardContainer>
      <img src={props.imgUrl} alt={`Xícara de ${props.title}`} />
      <ul>
        {props.categories.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <footer>
        <span>
          R$ <strong>{priceFormated}</strong>
        </span>
      </footer>
    </ProductCardContainer>
  )
}
