const categories = ['Electronics', 'Furniture', 'Clothing', 'Books', 'Accessories']

const Sidebar = ({ setSelectedCategory }) => (
  <div style={{ width: '200px', background: '#f4f4f4', padding: '1rem' }}>
    <h3>Categories</h3>
    {categories.map(cat => (
      <div key={cat} style={{ margin: '0.5rem 0', cursor: 'pointer' }} onClick={() => setSelectedCategory(cat)}>
        {cat}
      </div>
    ))}
  </div>
)

export default Sidebar
