import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { formatPrice } from '../ProductList'

import { Banner, Infos } from './styles'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/card'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCard = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De por {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && <>por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Click aqui para adicionar este jogo ao carrinho"
              variant="primary"
              onClick={addToCard}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
