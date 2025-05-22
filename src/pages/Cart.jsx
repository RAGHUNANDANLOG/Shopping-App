const Cart = ({ cart }) => (
  <div style={{ padding: '1rem', flex: 1 }}>
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {cart.map((item, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 0 5px #ccc',
            }}
          >
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    )}
  </div>
)

export default Cart
