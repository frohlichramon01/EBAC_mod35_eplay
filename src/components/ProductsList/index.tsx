import React from 'react'
import Product from '../Product'
import * as S from './styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

// Definindo os tipos de props que o componente ProductsList vai receber
export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

// Componente ProductsList
const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
  // Função para obter tags de um jogo
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  system={game.details.system}
                  title={game.name}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
