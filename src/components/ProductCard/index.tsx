import { ShoppingCart } from 'phosphor-react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { Product } from '../../pages/Home/constants'
import { formatPrice, removeBRLPrefix } from '../../utils/currency'
import { ProductAmountInput } from '../ProductAmountInput'
import { ProductCardContainer } from './styles'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart, addProductToCart, decreaseProductAmountOnCart } = useCart()

  const productOnCart = cart.products.find((prod) => prod.id === product.id)

  const priceFormated = formatPrice(product.price)
  const priceFormatedWithNoPrefix = removeBRLPrefix(priceFormated)

  console.log(product.price, priceFormated)

  const productAmount = useMemo(() => {
    return productOnCart?.amount || 0
  }, [productOnCart])

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
          R$ <strong>{priceFormatedWithNoPrefix}</strong>
        </span>

        <div>
          <ProductAmountInput
            value={productAmount}
            onIncreaseProductAmount={() => addProductToCart(product)}
            onDecreaseProductAmount={() =>
              decreaseProductAmountOnCart(product.id)
            }
          />
          <Link to="/checkout">
            <ShoppingCart color="#fff" size={20} weight="fill" />
          </Link>
        </div>
      </footer>
    </ProductCardContainer>
  )
}
