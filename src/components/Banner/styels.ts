import styled from 'styled-components'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  padding-top: 340px;
  background-image: no-repeat;
  background-size: cover;
  font-weight: bold;
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
