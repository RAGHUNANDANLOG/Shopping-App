import { useState } from 'react'
import { products } from '../data/products'

const Home = ({ category, addToCart }) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = products
    .filter(p => p.category === category)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSearch = () => {
    setSearchTerm(searchInput.trim())
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    alert('Added successfully')  // <-- Alert message here
  }

  return (
    <div style={{ padding: '1rem', flex: 1 }}>
      <h2>{category}</h2>

      {/* Search Bar */}
      <div style={{ display: 'flex', margin: '1rem 0', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          style={{
            flex: 1,
            padding: '0.5rem',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
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
