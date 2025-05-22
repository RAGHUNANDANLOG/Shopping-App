import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = ({ cartCount }) => (
  <nav
    style={{
      background: '#333',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        Home
      </Link>
    </div>

    <div style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', position: 'relative' }}>
        <FaShoppingCart size={20} />
        {cartCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
            }}
          >
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  </nav>
)

export default Navbar
