import Banner from '../../components/Banner'
import ProductLIsta from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductLIsta
        title="Promoções"
        background="gray"
        games={onSaleGames}
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductLIsta
        title="Em breve"
        background="black"
        games={soonGames}
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
