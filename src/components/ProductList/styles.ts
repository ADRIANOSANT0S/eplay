import { colors } from '../../styles'
import styled from 'styled-components'

import { Props } from '.'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(prop) =>
    prop.background === 'gray' ? colors.grey : colors.black};

  ${Card} {
    background-color: ${(prop) =>
      prop.background === 'gray' ? colors.black : colors.grey};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
