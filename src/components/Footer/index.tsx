import { Container, SectionTitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories/#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories/#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories/#sport">Esportes</Link>
          </li>
          <li>
            <Link to="/categories/#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories/#flight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link to="#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="#coming-soon">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p> {currentYear} - &copy; E-Play Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
