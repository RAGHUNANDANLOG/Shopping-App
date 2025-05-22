const Cart = ({ cart, increment, decrement, remove }) => (
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {/* - Button */}
              <button
                onClick={() => decrement(item.id)}
                style={buttonStyle}
              >
                −
              </button>

              {/* Quantity */}
              <span style={quantityStyle}>{item.quantity}</span>

              {/* + Button */}
              <button
                onClick={() => increment(item.id)}
                style={buttonStyle}
              >
                +
              </button>

              {/* Remove Button */}
              <button
                onClick={() => remove(item.id)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px',
                  backgroundColor: '#fff',
                  color: '#000',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)

const buttonStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const quantityStyle = {
  minWidth: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '0 10px',
  fontWeight: 'bold',
}

export default Cart
