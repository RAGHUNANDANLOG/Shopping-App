import { useState } from 'react'
import { products } from '../data/products'

const Home = ({ category, addToCart }) => {
  const [searchInput, setSearchInput] = useState('')

  // Live filtering using search input directly
  const filtered = products
    .filter(p => p.category === category)
    .filter(p => p.name.toLowerCase().includes(searchInput.toLowerCase()))

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div style={{ padding: '1rem', flex: 1 }}>
      <h2>{category}</h2>

      {/* Search Bar (no button) */}
      <div style={{ margin: '1rem 0' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {filtered.length > 0 ? (
          filtered.map(p => (
            <div
              key={p.id}
              style={{
                background: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 0 5px #ccc',
              }}
            >
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>No products found.</p>
        )}
      </div>
    </div>
  )
}

export default Home
