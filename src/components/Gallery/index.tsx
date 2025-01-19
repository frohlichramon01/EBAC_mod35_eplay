import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: 'https://placehold.co/300x300'
  },
  {
    type: 'image',
    url: 'https://placehold.co/300x300'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAH1Q'
  },
  {
    type: 'image',
    url: 'https://placehold.co/300x300'
  }
]

type Props = { defaultCover: string; name: string }

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent>
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="" />
          </header>
          <img src="https://placehold.co/600x400" alt={name} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
