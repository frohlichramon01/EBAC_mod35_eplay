import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placehold.co/222x250',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4',
    title: 'Jogo 1'
  },
  {
    id: 2,
    category: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placehold.co/222x250',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4',
    title: 'Jogo 2'
  },
  {
    id: 3,
    category: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placehold.co/222x250',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4',
    title: 'Jogo 3'
  }
]

const emBreve: Game[] = [
  {
    id: 4,
    category: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placehold.co/222x250',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4',
    title: 'Jogo 4'
  },
  {
    id: 5,
    category: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placehold.co/222x250',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4',
    title: 'Jogo 5'
  },
  {
    id: 6,
    category: 'Action',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placehold.co/222x250',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4',
    title: 'Jogo 6'
  }
]
const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
