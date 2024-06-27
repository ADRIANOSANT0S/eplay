import ProductLIsta from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../sevices/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: flightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && flightGames && rpgGames) {
    return (
      <>
        <ProductLIsta
          title="Ação"
          background="black"
          games={actionGames}
          id="action"
        />
        <ProductLIsta
          title="Esportes"
          background="gray"
          games={sportGames}
          id="sport"
        />
        <ProductLIsta
          title="Luta"
          background="black"
          games={flightGames}
          id="flight"
        />
        <ProductLIsta title="RPG" background="gray" games={rpgGames} id="rpg" />
        <ProductLIsta
          title="Simulação"
          background="black"
          games={simulationGames}
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
