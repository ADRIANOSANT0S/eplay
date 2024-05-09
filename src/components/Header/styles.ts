import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  background-color: ${colors.cinza};

  a {
    color: ${colors.branca};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
