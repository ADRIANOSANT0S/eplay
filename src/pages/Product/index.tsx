import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import resident from '../../assets/images/resident.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma:</strong> {game.details.system} <br />
          <strong>Desenvolvido:</strong> {game.details.developer} <br />
          <strong>Editora:</strong> {game.details.publisher} <br />
          <strong>Idiomas</strong> O jogo oferece suporte a diversos idiomas,
          incluindo {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name="Jogo test"
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
