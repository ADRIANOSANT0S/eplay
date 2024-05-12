import Banner from '../../components/Banner'
import ProductLIsta from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'

const sales: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'l0renalk nfaçlknasdfkj andfffaçdfn erna fçasdnfçaksjdhfpouir',
    title: 'Residente Evil 4',
    image: resident,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 2,
    category: 'Ação',
    description: 'l0renalk nfaçlknasdfkj andfffaçdfn erna fçasdnfçaksjdhfpouir',
    title: 'Residente Evil 4',
    image: star_wars,
    infos: ['10%', 'R$ 250,00'],
    system: 'windows'
  },
  {
    id: 3,
    category: 'Ação',
    description: 'l0renalk nfaçlknasdfkj andfffaçdfn erna fçasdnfçaksjdhfpouir',
    title: 'Residente Evil 4',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'windows'
  },
  {
    id: 4,
    category: 'Ação',
    description: 'l0renalk nfaçlknasdfkj andfffaçdfn erna fçasdnfçaksjdhfpouir',
    title: 'Residente Evil 4',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'windows'
  }
]

const soon: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'nfasçlkfn asldkfnasdçlkf qajeofkhnas f, açfknjas df',
    infos: ['17/07/2024'],
    title: 'Diablo 4',
    system: 'PS4',
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: 'nfasçlkfn asldkfnasdçlkf qajeofkhnas f, açfknjas df',
    infos: ['17/07/2024'],
    title: 'Zelda',
    system: 'PS4',
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description: 'nfasçlkfn asldkfnasdçlkf qajeofkhnas f, açfknjas df',
    infos: ['17/07/2024'],
    title: 'StarWars',
    system: 'PS4',
    image: star_wars
  },
  {
    id: 8,
    category: 'RPG',
    description: 'nfasçlkfn asldkfnasdçlkf qajeofkhnas f, açfknjas df',
    infos: ['17/07/2024'],
    title: 'Residente',
    system: 'Nintendo Switch',
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductLIsta title="Promoções" background="gray" games={sales} />
    <ProductLIsta title="Em breve" background="black" games={soon} />
  </>
)

export default Home
