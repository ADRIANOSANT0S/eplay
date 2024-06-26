import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'
import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../ProductList'

import { useGetFeaturedGameQuery } from '../../sevices/api'

import { Image, Prices, Title } from './styles'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size={'big'}>Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
