import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalOrder = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const cartListLength = cartList.length
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">
            Order Total:{' '}
            <span className="totalorder-span"> Rs {totalOrder}/-</span>{' '}
          </h1>
          <p className="items-cart-length">{cartListLength} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
