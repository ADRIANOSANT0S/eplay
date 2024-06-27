import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  color: ${colors.grey2};
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
