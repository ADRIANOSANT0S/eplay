import { useEffect, useState } from 'react'

import ProductLIsta from '../../components/ProductList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesActio, setGamesAction] = useState<Game[]>([])
  const [gamesSport, setGamesSport] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSport(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductLIsta title="Ação" background="black" games={gamesActio} />
      <ProductLIsta title="Esportes" background="gray" games={gamesSport} />
      <ProductLIsta title="Luta" background="black" games={gamesLuta} />
      <ProductLIsta title="RPG" background="gray" games={gamesRPG} />
      <ProductLIsta
        title="Simulação"
        background="black"
        games={gamesSimulation}
      />
    </>
  )
}

export default Categories
