import { styled } from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/details/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  transition: 0.5 ease;

  &.is-open {
    display: flex;
    transition: 0.5 ease;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.grey};
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGrey};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin: 32px 0 16px 0;
`
export const CardItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    color: ${colors.white};
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${colors.white};
    font-weight: bold;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    max-width: 16px;
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
    cursor: pointer;
  }
`
