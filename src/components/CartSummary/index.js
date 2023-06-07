// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalOrderPrice = 0

      cartList.forEach(eachCartItem => {
        totalOrderPrice += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div>
            <h1>
              <span className="order-total-heading">Order Total: </span>
              {totalOrderPrice}/-
            </h1>
            <p className="items-in-cart">{`${cartList.length} items in cart`}</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
