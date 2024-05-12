import { Image, Prices, Title } from './styles'

import Tag from '../Tag'
import Button from '../Button'

import banner from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Tag size={'big'}>Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
      <Button
        type="link"
        to="/produtos"
        title="Click aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Image>
)

export default Banner
