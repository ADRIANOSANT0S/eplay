import Button from '../Button'

import {
  CardContainer,
  Sidebar,
  Prices,
  Quantity,
  CardItem,
  Overlay
} from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/card'
import { formatPrice } from '../ProductList'

const Card = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.card)

  const dispatch = useDispatch()

  const closeCard = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCard} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CardItem>
          ))}
          <Quantity>{items.length} jogo(s) no carrinho</Quantity>
          <Prices>
            Total de {formatPrice(getTotalPrice())}{' '}
            <span>Em até 6x sem juros</span>
          </Prices>
          <Button type="button" title="Click aqui para continuar com a compra">
            Continuar com a compra
          </Button>
        </ul>
      </Sidebar>
    </CardContainer>
  )
}

export default Card
