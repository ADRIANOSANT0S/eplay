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

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
