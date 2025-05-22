import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Electronics')
  const [cart, setCart] = useState([])

  const addToCart = (item) => setCart([...cart, item])

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div style={{ display: 'flex' }}>
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <Routes>
          <Route path="/" element={<Home category={selectedCategory} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
