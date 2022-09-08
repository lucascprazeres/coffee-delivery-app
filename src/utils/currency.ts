export function formatPrice(price: number) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 100)
}

export function removeBRLPrefix(currency: string) {
  return currency.replace(/[R$]/g, '')
}
