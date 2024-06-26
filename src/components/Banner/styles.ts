import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-image: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 340px;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
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
