import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-image: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 340px;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
  width: 100%;
`

export const Prices = styled.p`
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
