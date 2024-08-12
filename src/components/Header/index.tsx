import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/card'

import logo from '../../assets/images/logo.svg'
import cardIcon from '../../assets/images/carrinho.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()

  const openCard = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.card)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburger>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <Link
                  title="Click aqui para acessar a página categoria"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Click aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Novidades
                </HashLink>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Click aqui para acessar a seção de promoções"
                  to="#/on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </div>
        <S.CardButton role="button" onClick={openCard}>
          {items.length} <span> - produtos(s)</span>
          <img src={cardIcon} alt="carrinho" />
        </S.CardButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinksItem>
            <Link
              title="Click aqui para acessar a página categoria"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Click aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Click aqui para acessar a seção de promoções"
              to="#/on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
