import Section from '../Section'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src="https://placehold.co/300x300" alt="" />
      </Item>
      <Item>
        <img src="https://placehold.co/300x300" alt="" />
      </Item>
      <Item>
        <img src="https://placehold.co/300x300" alt="" />
      </Item>
      <Item>
        <img src="https://placehold.co/300x300" alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
