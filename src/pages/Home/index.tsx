import Banner from '../../components/Banner'
import ProductLIsta from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../sevices/api'
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
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductLIsta
          title="Promoções"
          background="gray"
          games={onSaleGames}
          id="on-sale"
        />
        <ProductLIsta
          title="Em breve"
          background="black"
          games={soonGames}
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
