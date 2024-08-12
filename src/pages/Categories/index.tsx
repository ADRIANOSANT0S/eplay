import ProductLIsta from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: flightGames, isLoading: isLoadingFlight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductLIsta
        title="Ação"
        background="black"
        games={actionGames}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductLIsta
        title="Esportes"
        background="gray"
        games={sportGames}
        id="sport"
        isLoading={isLoadingSport}
      />
      <ProductLIsta
        title="Luta"
        background="black"
        games={flightGames}
        id="flight"
        isLoading={isLoadingFlight}
      />
      <ProductLIsta
        title="RPG"
        background="gray"
        games={rpgGames}
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductLIsta
        title="Simulação"
        background="black"
        games={simulationGames}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
  return <h4>Carregando...</h4>
}

export default Categories
