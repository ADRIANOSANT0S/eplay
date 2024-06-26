import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductLIsta from '../../components/ProductList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocao, setPromocao] = useState<Game[]>([])
  const [emBreve, setemBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocao(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setemBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductLIsta title="Promoções" background="gray" games={promocao} />
      <ProductLIsta title="Em breve" background="black" games={emBreve} />
    </>
  )
}

export default Home
