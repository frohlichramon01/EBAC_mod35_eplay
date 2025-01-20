import Button from '../Button'
import Tag from '../Tag'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src="https://placehold.co/300x300" alt="" />
          <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src="https://placehold.co/300x300" alt="" />
          <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogos no carrinho</Quantity>
      <Prices>
        Total de R$ 250 <span>em até 6x sem juros</span>
      </Prices>
      <Button title="Cliquei aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
