import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Electronics')
  const [cart, setCart] = useState([])

  // ✅ Add to cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  // ✅ Increment quantity
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  // ✅ Decrement quantity
  const decrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    )
  }

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <div>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <div style={{ display: 'flex' }}>
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <Routes>
          <Route
            path="/"
            element={<Home category={selectedCategory} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increment={increment}
                decrement={decrement}
                remove={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
