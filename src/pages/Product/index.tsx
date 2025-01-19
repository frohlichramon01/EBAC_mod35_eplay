import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis
          nesciunt perferendis quas aliquam nemo facilis qui debitis, rerum enim
          quis quam, porro reprehenderit minima alias nulla consectetur
          assumenda? Facere.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> Playstation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas...
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>Fotos</div>
      </Section>
    </>
  )
}

export default Product
