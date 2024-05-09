import { HeaderContainer, LinkCart, Links, LinksItem } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderContainer>
    <div>
      <img src={logo} alt="Logo da loja EPlay" />
      <nav>
        <Links>
          <LinksItem>
            <a href="">Categorias</a>
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
    <LinkCart href="#">
      0 - produtos(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderContainer>
)

export default Header
