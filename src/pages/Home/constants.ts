import expressoTradicionalImg from '../../assets/images/expresso-tradicional.png'
import expressoAmericanoImg from '../../assets/images/expresso-americano.png'
import expressoCremosoImg from '../../assets/images/expresso-cremoso.png'
import expressoGeladoImg from '../../assets/images/expresso-gelado.png'
import cafeComLeiteImg from '../../assets/images/cafe-com-leite.png'
import latteImg from '../../assets/images/latte.png'
import capuccinoImg from '../../assets/images/capuccino.png'
import macchiatoImg from '../../assets/images/macchiato.png'
import mocaccinoImg from '../../assets/images/mocaccino.png'
import chocolateQuenteImg from '../../assets/images/chocolate-quente.png'
import cubanoImg from '../../assets/images/cubano.png'
import havaianoImg from '../../assets/images/havaiano.png'
import arabeImg from '../../assets/images/arabe.png'
import irlandesImg from '../../assets/images/irlandes.png'

export interface Product {
  id: string
  imgUrl: string
  title: string
  categories: string[]
  description: string
  price: number
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    imgUrl: expressoTradicionalImg,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    categories: ['Tradicional'],
    price: 990,
  },
  {
    id: '2',
    imgUrl: expressoAmericanoImg,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['Tradicional'],
    price: 990,
  },
  {
    id: '3',
    imgUrl: expressoCremosoImg,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    categories: ['tradicional'],
    price: 990,
  },
  {
    id: '4',
    imgUrl: expressoGeladoImg,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    categories: ['tradicional', 'gelado'],
    price: 990,
  },
  {
    id: '5',
    imgUrl: cafeComLeiteImg,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    categories: ['tradicional', 'com leite'],
    price: 990,
  },
  {
    id: '6',
    imgUrl: latteImg,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    categories: ['tradicional', 'com leite'],
    price: 990,
  },
  {
    id: '7',
    imgUrl: capuccinoImg,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    categories: ['tradicional', 'com leite'],
    price: 990,
  },
  {
    id: '8',
    imgUrl: macchiatoImg,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    categories: ['tradicional', 'com leite'],
    price: 990,
  },
  {
    id: '9',
    imgUrl: mocaccinoImg,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    categories: ['tradicional', 'com leite'],
    price: 990,
  },
  {
    id: '10',
    imgUrl: chocolateQuenteImg,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    categories: ['especial', 'com leite'],
    price: 990,
  },
  {
    id: '11',
    imgUrl: cubanoImg,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    categories: ['especial', 'alcoólico', 'gelado'],
    price: 990,
  },
  {
    id: '12',
    imgUrl: havaianoImg,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    categories: ['especial'],
    price: 990,
  },
  {
    id: '13',
    imgUrl: arabeImg,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    categories: ['especial'],
    price: 990,
  },
  {
    id: '14',
    imgUrl: irlandesImg,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    categories: ['especial', 'alcoólico'],
    price: 990,
  },
]
