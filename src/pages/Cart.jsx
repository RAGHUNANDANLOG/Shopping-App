const Cart = ({ cart }) => (
  <div>
    <h2>Your Cart</h2>
    {cart.length === 0 ? <p>No items in cart</p> : (
      cart.map((item, i) => (
        <div key={i}>
          <h4>{item.name} - ₹{item.price}</h4>
        </div>
      ))
    )}
  </div>
)

export default Cart
