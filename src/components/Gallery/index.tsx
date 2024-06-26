import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import { Items, Item, Action, Modal, ModalContainer } from './styles'

import spiderman from '../../assets/images/banner-homem-aranha.png'
import resident from '../../assets/images/details/resident.png'
import zoom from '../../assets/images/details/zoom.png'
import play from '../../assets/images/details/play.png'
import flechar from '../../assets/images/details/fechar.png'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const modalClose = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={index}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Click para aproximar a imagem"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContainer className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={flechar}
              alt="ícone de fechar"
              onClick={() => {
                modalClose()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContainer>
        <div
          className="overlay"
          onClick={() => {
            modalClose()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
