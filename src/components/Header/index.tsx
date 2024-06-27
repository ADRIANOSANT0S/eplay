import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { Link } from 'react-router-dom'

import { HeaderContainer, CardButton, Links, LinksItem } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/card'

const Header = () => {
  const dispatch = useDispatch()

  const openCard = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.card)

  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo da loja EPlay" />
        </Link>
        <nav>
          <Links>
            <LinksItem>
              <Link to="/categories">Categorias</Link>
            </LinksItem>
            <LinksItem>
              <a href="">Novidades</a>
            </LinksItem>
            <LinksItem>
              <a href="">Promoções</a>
            </LinksItem>
          </Links>
        </nav>
      </div>
      <CardButton href="#" onClick={openCard}>
        {items.length}- produtos(s)
        <img src={carrinho} alt="carrinho" />
      </CardButton>
    </HeaderContainer>
  )
}

export default Header
