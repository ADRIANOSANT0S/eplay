import Product from '../Product'

import { parcelToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductLIsta = ({ title, background, games, id, isLoading }: Props) => {
  const getGameTag = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parcelToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container background={background} id={id}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGameTag(game)}
                  system={game.details.system}
                  title={game.name}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductLIsta
